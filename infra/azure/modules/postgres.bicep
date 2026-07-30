@description('프로젝트 이름')
param projectName string = 'copanion'

@description('배포 환경')
@allowed([ 'dev', 'prod' ])
param environment string

@description('Azure 리전 (기본값: 리소스 그룹의 리전)')
param location string = resourceGroup().location

@description('VNet 모듈에서 생성된 PostgreSQL 전용 서브넷 ID')
param dbSubnetId string

@description('PostgreSQL 관리자 계정 (기본값 적용, 필요 시 오버라이드)')
param adminLogin string = 'postgresadmin'

@description('PostgreSQL 관리자 비밀번호')
@secure()
param adminPassword string

// 1. CAF 기반 네이밍 규칙 캡슐화
var locationAbbr = location == 'koreacentral' ? 'krc' : 'global'
var serverName = 'psql-${projectName}-${environment}-${locationAbbr}-01'

// 2. 환경별 스펙(SKU) 및 고가용성 설정 캡슐화
// 운영(prod) 환경은 범용(General Purpose) 티어와 고가용성(ZoneRedundant) 적용
// 개발(dev) 환경은 비용 절감을 위해 기본(Burstable) 티어와 고가용성 미적용
var skuName = environment == 'prod' ? 'Standard_D2s_v3' : 'Standard_B1ms'
var skuTier = environment == 'prod' ? 'GeneralPurpose' : 'Burstable'
var storageSizeGB = environment == 'prod' ? 128 : 32
var haMode = environment == 'prod' ? 'ZoneRedundant' : 'Disabled'

// 3. 리소스 정의
resource postgresServer 'Microsoft.DBforPostgreSQL/flexibleServers@2023-03-01-preview' = {
  name: serverName
  location: location
  sku: {
    name: skuName
    tier: skuTier
  }
  properties: {
    version: '15' // PostGIS 확장을 지원하는 최신 안정화 버전
    administratorLogin: adminLogin
    administratorLoginPassword: adminPassword
    storage: {
      storageSizeGB: storageSizeGB
    }
    highAvailability: {
      mode: haMode
    }
    network: {
      // VNet 내부 통신을 위한 서브넷 위임 설정
      delegatedSubnetResourceId: dbSubnetId
    }
  }
}

// 4. PostgreSQL 확장 프로그램 설정 (자식 리소스 외부 선언)
resource serverExtensions 'Microsoft.DBforPostgreSQL/flexibleServers/configurations@2023-03-01-preview' = {
  parent: postgresServer
  name: 'azure.extensions'
  properties: {
    // RAG를 위한 vector 및 위치 기반 서비스를 위한 postgis 동시 허용
    value: 'VECTOR,POSTGIS' 
    source: 'user-override'
  }
}

// 5. 출력 (Outputs) - 다른 모듈(ACA 등)에서 DB 연결 정보로 활용
output serverId string = postgresServer.id
output serverName string = postgresServer.name
output serverFqdn string = postgresServer.properties.fullyQualifiedDomainName

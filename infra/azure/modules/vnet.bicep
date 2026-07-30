@description('프로젝트 이름')
param projectName string = 'copanion'

@description('배포 환경')
@allowed([ 'dev', 'prod' ]) // dev와 prod만 입력 가능하도록 강제
param environment string

@description('Azure 리전 (기본값: 리소스 그룹의 리전)')
param location string = resourceGroup().location

// 리전 이름 약어 매핑 (koreacentral -> krc)
var locationAbbr = location == 'koreacentral' ? 'krc' : 'global'

// CAF 표준 네이밍 규칙을 적용한 변수 선언
var vnetName = 'vnet-${projectName}-${environment}-${locationAbbr}-01'
var acaSubnetName = 'snet-aca'
var dbSubnetName = 'snet-postgres'

resource vnet 'Microsoft.Network/virtualNetworks@2023-04-01' = {
  name: vnetName
  location: location
  properties: {
    addressSpace: { 
      addressPrefixes: [ '10.0.0.0/16' ] 
    }
    subnets: [
      {
        name: acaSubnetName // Container Apps용 서브넷
        properties: { 
          addressPrefix: '10.0.0.0/21' 
        }
      }
      {
        name: dbSubnetName // PostgreSQL 전용 서브넷 (Delegated)
        properties: {
          addressPrefix: '10.0.8.0/24'
          delegations: [
            {
              name: 'pg-delegation'
              properties: { 
                serviceName: 'Microsoft.DBforPostgreSQL/flexibleServers' 
              }
            }
          ]
        }
      }
    ]
  }
}

output vnetId string = vnet.id
output vnetName string = vnet.name
output acaSubnetId string = vnet.properties.subnets[0].id
output dbSubnetId string = vnet.properties.subnets[1].id

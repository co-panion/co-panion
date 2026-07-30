targetScope = 'resourceGroup'

@description('프로젝트 이름')
param projectName string = 'copanion'

@description('배포 환경')
@allowed([ 'dev', 'prod' ])
param environment string = 'dev'

@description('Azure 리전')
param location string = resourceGroup().location

@description('PostgreSQL 관리자 비밀번호')
@secure()
param adminPassword string

// ==========================================
// 1. 네트워크 인프라 배포 (VNet & Subnets)
// ==========================================
module vnet '../../modules/vnet.bicep' = {
  name: 'deploy-vnet-${environment}'
  params: {
    projectName: projectName
    environment: environment
    location: location
  }
}

// ==========================================
// 2. 컨테이너 레지스트리 배포 (ACR)
// ==========================================
module acr '../../modules/acr.bicep' = {
  name: 'deploy-acr-${environment}'
  params: {
    projectName: projectName
    environment: environment
    location: location
  }
}

// ==========================================
// 3. 데이터베이스 배포 (PostgreSQL)
// ==========================================
module postgres '../../modules/postgres.bicep' = {
  name: 'deploy-postgres-${environment}'
  params: {
    projectName: projectName
    environment: environment
    location: location
    
    dbSubnetId: vnet.outputs.dbSubnetId // VNet 모듈에서 생성된 DB 서브넷 ID를 주입
    adminPassword: adminPassword
  }
}

// ==========================================
// 4. 컨테이너 앱 환경 배포 (ACA Environment)
// ==========================================
module acaEnv '../../modules/aca-env.bicep' = {
  name: 'deploy-aca-env-${environment}'
  params: {
    projectName: projectName
    environment: environment
    location: location
    
    acaSubnetId: vnet.outputs.acaSubnetId // VNet 모듈에서 생성된 ACA 서브넷 ID를 주입
  }
  // VNet 구성이 완료된 후 ACA 환경이 배포되도록 의존성(dependsOn) 명시
  dependsOn: [
    vnet
  ]
}

// ==========================================
// 출력 (Outputs) - GitHub Actions나 스크립트에서 활용할 수 있도록 주요 정보 내보내기
// ==========================================
output acrLoginServer string = acr.outputs.loginServer
output acaEnvironmentId string = acaEnv.outputs.environmentId


@description('프로젝트 이름')
param projectName string = 'copanion'

@description('배포 환경')
@allowed([ 'dev', 'prod' ])
param environment string

@description('Azure 리전')
param location string = resourceGroup().location

@description('VNet 모듈에서 생성된 ACA 전용 서브넷 ID')
param acaSubnetId string

var locationAbbr = location == 'koreacentral' ? 'krc' : 'global'
var envName = 'cae-${projectName}-${environment}-${locationAbbr}-01'
var logAnalyticsName = 'law-${projectName}-${environment}-${locationAbbr}-01'

// 1. ACA 로그 수집용 Log Analytics Workspace 생성
resource logAnalytics 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: logAnalyticsName
  location: location
  properties: {
    sku: { name: 'PerGB2018' }
    retentionInDays: environment == 'prod' ? 30 : 7 // 개발 환경은 로그 보관 주기 축소
  }
}

// 2. ACA Environment 생성 (VNet 통합)
resource acaEnv 'Microsoft.App/managedEnvironments@2023-05-01' = {
  name: envName
  location: location
  properties: {
    vnetConfiguration: {
      internal: true // 내부망(VNet)에만 노출
      infrastructureSubnetId: acaSubnetId
    }
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalytics.properties.customerId
        sharedKey: logAnalytics.listKeys().primarySharedKey
      }
    }
  }
}

output environmentId string = acaEnv.id
output environmentName string = acaEnv.name
output defaultDomain string = acaEnv.properties.defaultDomain

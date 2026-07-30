@description('프로젝트 이름')
param projectName string = 'copanion'

@description('배포 환경')
@allowed([ 'dev', 'prod' ])
param environment string

@description('Azure 리전')
param location string = resourceGroup().location

var locationAbbr = location == 'koreacentral' ? 'krc' : 'global'
var storageName = 'st${projectName}${environment}${locationAbbr}01' // 최대 24자, 하이픈 제외

// 운영 환경은 가용 영역 중복(ZRS), 개발 환경은 로컬 중복(LRS) 적용
var skuName = environment == 'prod' ? 'Standard_ZRS' : 'Standard_LRS'

resource storage 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageName
  location: location
  sku: { 
    name: skuName 
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
    supportsHttpsTrafficOnly: true
    minimumTlsVersion: 'TLS1_2'
  }
}

output storageId string = storage.id
output storageName string = storage.name

@description('프로젝트 이름 (하이픈 불가, 알파벳 소문자 권장)')
param projectName string = 'copanion'

@description('배포 환경')
@allowed([ 'dev', 'prod' ])
param environment string

@description('Azure 리전 (기본값: 리소스 그룹의 리전)')
param location string = resourceGroup().location

// 리전 이름 약어 매핑
var locationAbbr = location == 'koreacentral' ? 'krc' : 'global'

// ACR 네이밍 규칙: 하이픈(-) 없이 영문/숫자 5~50자 (예: crcopaniondevkrc01)
var acrName = 'cr${projectName}${environment}${locationAbbr}01'

resource acr 'Microsoft.ContainerRegistry/registries@2023-01-01-preview' = {
  name: acrName
  location: location
  sku: { 
    // 개발 환경은 Basic, 운영 환경은 Standard 또는 Premium 사용 권장
    name: environment == 'prod' ? 'Standard' : 'Basic' 
  }
  properties: { 
    adminUserEnabled: true 
  }
}

output acrId string = acr.id
output acrName string = acr.name
output loginServer string = acr.properties.loginServer

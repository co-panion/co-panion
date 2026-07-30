@description('프로젝트 이름')
param projectName string = 'copanion'

@description('애플리케이션 식별자 (예: api, web)')
param appName string

@description('배포 환경')
@allowed([ 'dev', 'prod' ])
param environment string

@description('Azure 리전')
param location string = resourceGroup().location

@description('ACA Environment ID')
param containerAppEnvironmentId string

@description('ACR 로그인 서버 주소 (예: myacr.azurecr.io)')
param acrLoginServer string

@description('ACR 관리자 사용자 이름')
param acrUsername string

@description('ACR 관리자 비밀번호')
@secure()
param acrPassword string

@description('배포할 도커 이미지 태그 (예: myacr.azurecr.io/api:latest)')
param containerImage string

var locationAbbr = location == 'koreacentral' ? 'krc' : 'global'
var containerAppName = 'ca-${projectName}-${appName}-${environment}-${locationAbbr}-01'

// 운영 환경은 다중 인스턴스 보장, 개발 환경은 비용 절감을 위해 0으로 스케일다운 허용
var minReplicas = environment == 'prod' ? 2 : 0
var maxReplicas = environment == 'prod' ? 10 : 2

resource containerApp 'Microsoft.App/containerApps@2023-05-01' = {
  name: containerAppName
  location: location
  properties: {
    managedEnvironmentId: containerAppEnvironmentId
    configuration: {
      ingress: {
        external: true
        targetPort: 3000
      }
      registries: [
        {
          server: acrLoginServer
          username: acrUsername
          passwordSecretRef: 'acr-password'
        }
      ]
      secrets: [
        {
          name: 'acr-password'
          value: acrPassword
        }
      ]
    }
    template: {
      containers: [
        {
          name: appName
          image: containerImage
          resources: {
            cpu: json('0.5')
            memory: '1.0Gi'
          }
          env: [
            {
              name: 'NODE_ENV'
              value: environment == 'prod' ? 'production' : 'development'
            }
          ]
        }
      ]
      scale: {
        minReplicas: minReplicas
        maxReplicas: maxReplicas
      }
    }
  }
}

output fqdn string = containerApp.properties.configuration.ingress.fqdn

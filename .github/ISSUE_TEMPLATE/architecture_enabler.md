---
name: "🏗 아키텍처 및 기반 작업 (Architecture / Enabler)"
about: 대규모 데이터베이스 스키마 개편, 코어 모듈 리팩토링 등 파괴적 변경을 동반하는 기술적 기반 작업을 위한 템플릿입니다.
title: "refactor(core): [작업 내용 요약]"
labels: ["architecture"]
assignees: ""
---

## 1. 작업 목적 (Motivation & Context)
<!-- 왜 이 아키텍처 변경이나 스키마 개편이 필요한지, 기존 시스템의 한계는 무엇인지 기재합니다. -->


## 2. 확보되는 비즈니스 가치 (Business Value / Enabler)
<!-- 이 작업이 완료됨으로써 향후 어떤 비즈니스 기능(Feature)들의 개발이 가능해지는지 명시합니다. -->
- 
- 

## 3. 파괴적 변경 및 영향 범위 (Breaking Changes & Impact) ⚠️
<!-- 이 작업으로 인해 기존 코드(API, DTO, 프론트엔드 연동) 중 반드시 수정되어야 하는 부분을 경고합니다. -->
- **DB/Schema**: 
- **API/DTO**: 
- **Frontend**: 

## 4. 인수 조건 (Acceptance Criteria / DoD)
<!-- 이 기술적 작업이 성공적으로 완료되었다고 판단할 수 있는 기준을 나열합니다. -->
- [ ] 
- [ ] 

## 5. 마이그레이션 계획 (Migration Plan)
<!-- 기존 데이터를 어떻게 이관할 것인지, DB 초기화가 필요한지 등의 절차를 기재합니다. -->
- [ ] 스키마 마이그레이션 생성 (`npx prisma migrate dev`)
- [ ] 기존 데이터 처리 방안 (초기화 또는 이관 스크립트 작성): 

## 6. 참고 사항 (References)
<!-- 참조한 글로벌 스탠더드 모델, 아키텍처 설계도, 관련 논의 문서 링크 등을 첨부합니다. -->
-
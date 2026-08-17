export interface CreateAdoptionRequest {
  animalId: string;

  // 1. 기본 정보 (일회성 변경 및 프로필 업데이트 분기 제어)
  applicantInfo: {
    name: string;
    contact: string; // 본인 인증 모듈을 통과하여 검증된 연락처
    address: string;
    detailAddress: string;
    isProfileUpdate: boolean; // true: 마이페이지 기본 정보 업데이트 / false: 이번 신청에만 1회성 사용
  };

  // 2. 입양 심사 설문 (멀티스텝 폼 상태 통합)
  survey: {
    hasPetExperience: boolean;
    petExperienceDetails?: string;
    housingType: "APARTMENT" | "VILLA" | "HOUSE" | "ETC";
    familySize: number;
    hasChildren: boolean;
    isFamilyAgreed: boolean;
    adoptionReason: string;
    pledgeAgreements: string[]; // 동의 체크박스 배열 (예: ['VACCINATION', 'LIFETIME_CARE'])
    additionalComments?: string;
  };
}

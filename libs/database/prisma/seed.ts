import {
  PrismaClient,
  PartyType,
  IdentityVerificationMethod,
  Gender,
  AnimalStatus,
} from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("초기 데이터 시딩(Seeding)을 시작합니다...");

  // 1. 기존 데이터 초기화 (Cascade 무결성을 위해 하위 모델부터 삭제)
  await prisma.animal.deleteMany();
  await prisma.animalBreed.deleteMany();
  await prisma.animalSpecies.deleteMany();
  await prisma.shelter.deleteMany();
  await prisma.partyIndividual.deleteMany();
  await prisma.partyBusiness.deleteMany();
  await prisma.partyBase.deleteMany();

  // 2. 동물 종(Species) 및 품종(Breed) 메타 데이터 생성
  const dogSpecies = await prisma.animalSpecies.create({
    data: { id: 1, name: "개" },
  });
  const dogBreed = await prisma.animalBreed.create({
    data: { id: 1, speciesId: dogSpecies.id, name: "믹스견" },
  });

  const catSpecies = await prisma.animalSpecies.create({
    data: { id: 2, name: "고양이" },
  });
  const catBreed = await prisma.animalBreed.create({
    data: { id: 2, speciesId: catSpecies.id, name: "코리안 숏헤어" },
  });

  // 3. 비즈니스 주체 (보호소 운영자) 생성
  const businessParty = await prisma.partyBase.create({
    data: {
      partyType: PartyType.BUSINESS,
      business: {
        create: {
          businessName: "서울 유기동물 보호협회",
          registrationNumber: "123-45-67890",
        },
      },
    },
  });

  // 4. 개인 주체 (테스트 유저/입양 희망자) 생성
  await prisma.partyBase.create({
    data: {
      partyType: PartyType.INDIVIDUAL,
      individual: {
        create: {
          nickname: "테스트유저",
          di: "test_di_string_1234567890abcdef",
          isIdentityVerified: true,
          verificationMethod: IdentityVerificationMethod.MOBILE_SMS,
          verifyTime: new Date(),
          name: "홍길동",
          birthDateString: "19950101",
          gender: "M", // PartyIndividual의 성별은 String @db.Char(1) 규격
        },
      },
    },
  });

  // 5. 보호소 데이터 생성 (주소를 locationData JSONB 필드로 이관)
  const shelter = await prisma.shelter.create({
    data: {
      businessId: businessParty.partyId,
      name: "서울 동물 보호센터",
      phone: "02-1234-5678",
      operatingHours: "평일 10:00 - 18:00",
      description: "새로운 가족을 찾아줍니다.",
      locationData: {
        address: "서울특별시 마포구",
        lat: 37.5665,
        lng: 126.978,
      },
    },
  });

  // 6. 동물 데이터 생성
  await prisma.animal.create({
    data: {
      managerPartyId: businessParty.partyId,
      shelterId: shelter.id,
      speciesId: dogSpecies.id,
      breedId: dogBreed.id,
      name: "바둑이",
      gender: Gender.MALE, // Animal 모델의 성별은 Enum Gender 규격
      isNeutered: true,
      age: 24,
      isEstimatedAge: true,
      weight: 5.5,
      animalStatus: AnimalStatus.AVAILABLE,
    },
  });

  await prisma.animal.create({
    data: {
      managerPartyId: businessParty.partyId,
      shelterId: shelter.id,
      speciesId: catSpecies.id,
      breedId: catBreed.id,
      name: "나비",
      gender: Gender.FEMALE,
      isNeutered: false,
      age: 6,
      isEstimatedAge: true,
      weight: 3.2,
      animalStatus: AnimalStatus.PROTECTED,
    },
  });

  console.log("시딩이 성공적으로 완료되었습니다.");
}

main()
  .catch((e) => {
    console.error("시딩 중 에러가 발생했습니다:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("데이터베이스 시딩 시작...");

  // 1. Party 더미 데이터 생성 (개인 및 보호소/사업자)
  const individualParty = await prisma.partyBase.create({
    data: {
      partyType: "INDIVIDUAL",
      statusCode: "ACTIVE",
      individual: {
        create: {
          name: "테스트유저",
          di: "test_di_string_1234567890abcdef",
          ciUpdateTime: new Date(),
          birthDateString: "19950101",
          gender: "M",
        },
      },
      profile: {
        create: {
          profileData: {
            nickname: "테스트유저1",
            bio: "반려동물을 사랑하는 직장인입니다.",
            avatarUrl: "https://example.com/avatar1.png",
          },
        },
      },
    },
  });

  const shelterParty = await prisma.partyBase.create({
    data: {
      partyType: "BUSINESS",
      statusCode: "ACTIVE",
      business: {
        create: {
          businessName: "남부 유기동물 보호소",
          registrationNumber: "123-45-67890",
          verificationStatus: "VERIFIED",
          koreaDetail: {
            create: {
              ntsStatusCode: "01",
              fscIndustryCode: "1234",
            },
          },
        },
      },
      profile: {
        create: {
          profileData: {
            organizationName: "남부 유기동물 보호소",
            contactEmail: "contact@nambu-shelter.com",
          },
        },
      },
    },
  });
  console.log("✅ Party 데이터 생성 완료");

  // 2. 동물 및 품종 더미 데이터 생성
  const species = await prisma.animalSpecies.create({
    data: {
      name: "개",
      breeds: {
        create: {
          name: "믹스견",
        },
      },
    },
    include: {
      breeds: true,
    },
  });

  const createdBreed = species.breeds[0];
  if (!createdBreed) {
    throw new Error("생성된 품종(Breed) 데이터를 찾을 수 없습니다.");
  }

  const breedId = createdBreed.id;

  const animal = await prisma.animal.create({
    data: {
      managerPartyId: shelterParty.partyId,
      speciesId: species.id,
      breedId: breedId,
      name: "초코",
      gender: "MALE",
      isNeutered: true,
      age: 2,
      isEstimatedAge: false,
      weight: 5.5,
      animalStatus: "AVAILABLE",
    },
  });
  console.log("✅ 동물 데이터 생성 완료");

  // 3. 입양 신청 설문 더미 데이터 (Int 타입 및 관계형 필드 검증)
  await prisma.adoptionProcess.create({
    data: {
      animalId: animal.id,
      applicantPartyId: individualParty.partyId,
      status: "PENDING",
      detail: {
        create: {
          applicantName: "테스트유저",
          familySize: 4,
          youngestChildAge: 10,
          petExperience: "PAST",
          petExperienceMonths: 24,
          residenceType: "APARTMENT",
          petPolicy: "ALLOWED",
          isFamilyConsented: true,
        },
      },
    },
  });
  console.log("✅ 입양 신청 데이터 생성 완료");

  // 4. 커뮤니티 게시글 및 1-Depth 댓글 더미 데이터 (UUID targetId 정합성 반영)
  const post = await prisma.post.create({
    data: {
      title: "입양 공고 테스트 글입니다.",
      content: "많은 관심 부탁드립니다.",
      authorId: shelterParty.partyId,
    },
  });

  const rootComment = await prisma.comment.create({
    data: {
      content: "입양 절차에 대해 자세히 알고 싶습니다.",
      authorId: individualParty.partyId,
      targetType: "POST",
      targetId: post.id,
    },
  });

  await prisma.comment.create({
    data: {
      content: "입양 신청서를 먼저 작성해주시면 유선으로 안내해 드립니다.",
      authorId: shelterParty.partyId,
      targetType: "POST",
      targetId: post.id,
      rootId: rootComment.id,
      parentId: rootComment.id,
    },
  });
  console.log("✅ 1-Depth 댓글 데이터 생성 완료");
}

main()
  .catch((e) => {
    console.error("시딩 중 오류 발생:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("데이터베이스 시딩 종료.");
  });

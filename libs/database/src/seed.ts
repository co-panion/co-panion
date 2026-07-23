import { PrismaClient, Gender, AnimalStatus } from '@co-panion/database';

const prisma = new PrismaClient();

async function main() {
  console.log('초기 데이터 시딩을 시작합니다...');

  await prisma.animalImage.deleteMany();
  await prisma.animal.deleteMany();
  await prisma.shelter.deleteMany();

  const shelter1 = await prisma.shelter.create({
    data: {
      name: '서울 동물 보호센터',
      address: '서울특별시 마포구',
      phone: '0212345678',
      operatingHours: '평일 10:00 - 18:00',
      description: '새로운 가족을 찾아줍니다.',
      imgBanner: 'https://via.placeholder.com/1200x400',
    },
  });

  await prisma.animal.create({
    data: {
      shelterId: shelter1.id,
      name: '바둑이',
      species: 1,
      breed: 1,
      gender: Gender.MALE,
      isNeutered: true,
      age: 24,
      isEstimatedAge: true,
      animalStatus: AnimalStatus.PROTECTED,
      weight: 5.5,
      imgThumbnail: 'https://via.placeholder.com/400x300?text=Badugi',
    },
  });

  await prisma.animal.create({
    data: {
      shelterId: shelter1.id,
      name: '나비',
      species: 2,
      breed: 2,
      gender: Gender.FEMALE,
      isNeutered: false,
      age: 6,
      isEstimatedAge: false,
      animalStatus: AnimalStatus.AVAILABLE,
      weight: 2.1,
      imgThumbnail: 'https://via.placeholder.com/400x300?text=Nabi',
    },
  });

  console.log('초기 데이터 시딩 완료!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
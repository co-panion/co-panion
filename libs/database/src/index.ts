import { PrismaClient } from './generated/prisma';

export * from './generated/prisma';

// 싱글톤 패턴으로 클라이언트 인스턴스 공유 (커넥션 풀 고갈 방지)
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production'){
  globalForPrisma.prisma = prisma
}


import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 외부 모듈에서 주입받을 수 있도록 Export
})
export class PrismaModule {}

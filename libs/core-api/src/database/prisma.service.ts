import { Injectable, OnModuleInit, Logger } from "@nestjs/common";
// libs/database에서 생성된 순수 클라이언트를 가져옵니다.
import { PrismaClient } from "@co-panion/database";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    // 필요한 경우 PrismaClient 옵션(로깅 등)을 super()로 전달합니다.
    super({
      log: ["query", "info", "warn", "error"],
    });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log("Database connection established successfully.");
  }
}

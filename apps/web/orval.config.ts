// apps/web/orval.config.ts
import { defineConfig } from "orval";

export default defineConfig({
  "co-panion-api": {
    input: "../../api-spec.json",
    output: {
      mode: "tags-split",
      target: "src/api/endpoints",
      schemas: "src/api/model",
      client: "react-query",
      mock: true, // MSW 모킹 데이터 활성화
      override: {
        mutator: {
          path: "src/api/axios-instance.ts", // 커스텀 설정 경로
          name: "customInstance",
        },
      },
    },
  },
});

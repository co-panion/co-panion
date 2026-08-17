// apps/web/src/features/matching-self-check/model/schema.ts
import { z } from "zod";

export const _matchingSelfCheckSchema = z.object({
  contact: z
    .string()
    .min(1, "연락처를 입력해주세요.")
    .regex(/^010-\d{4}-\d{4}$/, "010-XXXX-XXXX 형식으로 입력해주세요."),
  homeImages: z
    .array(z.custom<File>())
    .min(1, "주거 환경 사진을 최소 1장 이상 등록해야 합니다."),

  // 💡 [수정] 단일 값에서 [최소시간, 최대시간] 튜플 배열로 변경
  awayTime: z
    .tuple([z.number().min(0).max(24), z.number().min(0).max(24)])
    .refine((val) => val[0] <= val[1], {
      message: "최소 시간이 최대 시간보다 클 수 없습니다.",
    }),
});

export type _MatchingSelfCheckFormData = z.infer<
  typeof _matchingSelfCheckSchema
>;

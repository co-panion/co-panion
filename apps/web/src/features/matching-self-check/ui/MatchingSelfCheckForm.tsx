// apps/web/src/features/matching-self-check/ui/SelfCheckForm.tsx
"use client";

import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RHFTextField } from "@/shared/ui/forms/RHFTextField";
import { RHFFileUploader } from "@/shared/ui/forms/RHFFileUploader";
import { RHFRangeSlider } from "@/shared/ui/forms/RHFRangeSlider";
import {
  matchingSelfCheckSchema,
  type MatchingSelfCheckFormData,
} from "../model/schema";

import { _selfCheckSchema, type _SelfCheckFormData } from "../model/schema";

export function MatchingSelfCheckForm() {
  const router = useRouter(); // 라우터 인스턴스 할당

  const methods = useForm<MatchingSelfCheckFormData>({
    resolver: zodResolver(matchingSelfCheckSchema),
    defaultValues: {
      contact: "",
      homeImages: [],
      awayTime: [6, 8], // 💡 기본값을 양방향 배열로 설정
    },
    mode: "onChange",
  });

  const onSubmit = async (data: MatchingSelfCheckFormData) => {
    try {
      // 1. API 호출 (추후 React Query Mutation 연결 영역)
      console.log("데이터 서버 전송 완료:", data); // await submitMatchingSelfCheck(data);
      router.push("/matching/result"); // 2. 제출 성공 시 매칭 결과 페이지로 리다이렉트
    } catch (error) {
      console.error("제출 실패:", error);
      // TODO: 에러 토스트(Toast) 렌더링
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm"
      >
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            입양 매칭 자가진단
          </h2>
          <p className="text-gray-500 mt-2">
            나와 가장 잘 맞는 동물을 찾기 위해 생활 환경을 체크합니다.
          </p>
        </header>

        <section className="space-y-6">
          <RHFTextField
            name="contact"
            label="비상 연락처"
            placeholder="010-1234-5678"
            type="tel"
          />

          <RHFRangeSlider
            name="awayTime"
            label="하루 평균 외출 시간 (보호자 부재 시간)" // 라벨을 어댑터 내부로 위임
            min={0}
            max={24}
            step={1}
            unit="시간"
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              주거 환경 사진 (거실, 방, 울타리 등)
            </label>
            <RHFFileUploader
              name="homeImages"
              maxFileCount={4}
              maxFileSizeInBytes={5 * 1024 * 1024}
              acceptTypes={["image/jpeg", "image/png"]}
            />
          </div>
        </section>

        <button
          type="submit"
          disabled={methods.formState.isSubmitting}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors disabled:opacity-50"
        >
          {methods.formState.isSubmitting ? "제출 중..." : "매칭 결과 확인하기"}
        </button>
      </form>
    </FormProvider>
  );
}

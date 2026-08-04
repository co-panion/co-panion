// apps/web/src/app/(public)/matching/self-check/page.tsx
import { Metadata } from "next";
import { MatchingSelfCheckForm } from "@/features/matching-self-check/ui/MatchingSelfCheckForm";

// Next.js 서버 컴포넌트 특성을 활용한 SEO 메타데이터 선언
export const metadata: Metadata = {
  title: "입양 매칭 자가진단 | Co-Panion",
  description: "나의 성향에 딱 맞는 완벽한 반려동물을 찾아보세요.",
};

export default function MatchingSelfCheckPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-8">
        {/* 페이지 고유의 타이틀 및 안내 영역 */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            성향 매칭 진단
          </h1>
          <p className="mt-2 text-base text-gray-600">
            나와 가장 잘 맞는 반려동물을 찾기 위해 솔직하게 체크해 주십시오.
          </p>
        </div>

        {/* 💡 Feature 슬라이스의 폼 컴포넌트 마운트 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <MatchingSelfCheckForm />
        </div>
      </div>
    </main>
  );
}

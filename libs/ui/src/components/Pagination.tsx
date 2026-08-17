// libs/ui/src/components/Pagination.tsx
import { cn } from "@co-panion/utils";
import React from "react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  // 5배수 블록 계산 로직
  const blockSize = 5;
  const currentBlock = Math.floor((currentPage - 1) / blockSize);
  const startPage = currentBlock * blockSize + 1;
  const endPage = Math.min(startPage + blockSize - 1, Math.max(1, totalPages));

  // 현재 블록에 속한 페이지 배열 생성 (예: [1, 2, 3, 4, 5])
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  // 데이터가 없거나 0페이지일 경우 렌더링 방어
  if (totalPages <= 0) return null;

  return (
    <nav
      className={cn("flex items-center justify-center gap-1.5", className)}
      aria-label="페이지네이션"
    >
      {/* 이전 블록 이동 버튼 */}
      <button
        type="button"
        onClick={() => onPageChange(startPage - 1)}
        disabled={startPage === 1}
        className="flex items-center justify-center w-8 h-8 text-sm border border-gray-200 rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-gray-600 outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
        aria-label="이전 페이지 블록으로 이동"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* 5배수 숫자 버튼 렌더링 */}
      {pages.map((page) => {
        const isCurrent = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={isCurrent ? "page" : undefined}
            className={cn(
              "flex items-center justify-center w-8 h-8 text-sm border rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-1",
              isCurrent
                ? "bg-gray-900 text-white border-gray-900 font-bold"
                : "border-gray-200 hover:bg-gray-50 text-gray-700 bg-white font-medium",
            )}
          >
            {page}
          </button>
        );
      })}

      {/* 다음 블록 이동 버튼 */}
      <button
        type="button"
        onClick={() => onPageChange(endPage + 1)}
        disabled={endPage >= totalPages}
        className="flex items-center justify-center w-8 h-8 text-sm border border-gray-200 rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-gray-600 outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
        aria-label="다음 페이지 블록으로 이동"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </nav>
  );
};

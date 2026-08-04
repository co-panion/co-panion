// apps/web/src/shared/ui/forms/RHFRangeSlider.tsx
"use client";

import { useFormContext, Controller } from "react-hook-form";
import { RangeSlider, type RangeSliderProps } from "@co-panion/ui";
import { useState } from "react";

export type RHFRangeSliderProps = Omit<
  RangeSliderProps,
  "value" | "onValueChange"
> & {
  name: string;
  label?: string;
  unit?: string;
};

export function RHFRangeSlider({
  name,
  label,
  unit = "",
  min = 0,
  max = 100,
  step = 1,
  ...props
}: RHFRangeSliderProps) {
  const { control } = useFormContext();
  const [isDirectInput, setIsDirectInput] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        // value가 배열이 아니면 기본 범위(min, max)로 안전하게 초기화
        const safeValue =
          Array.isArray(value) && value.length === 2 ? value : [min, max];

        return (
          <div className="w-full space-y-4">
            {/* 라벨 및 토글 버튼 헤더 */}
            <div className="flex items-center justify-between">
              {label && (
                <label className="text-sm font-medium text-gray-700">
                  {label}
                </label>
              )}
              <div className="flex items-center gap-3">
                {!isDirectInput && (
                  <span className="text-sm font-semibold text-gray-900">
                    {safeValue[0]}
                    {unit} ~ {safeValue[1]}
                    {unit}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setIsDirectInput(!isDirectInput)}
                  className="text-xs text-gray-500 underline underline-offset-2 hover:text-gray-900 transition-colors"
                >
                  {isDirectInput ? "슬라이더로 입력" : "직접 입력"}
                </button>
              </div>
            </div>

            {/* 입력 뷰 스위칭 영역 */}
            {isDirectInput ? (
              // 1. 숫자 직접 입력 뷰
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={min}
                  max={safeValue[1]} // 최소값은 현재 지정된 최대값을 넘을 수 없음
                  step={step}
                  value={safeValue[0]}
                  onChange={(e) => {
                    const newMin = Math.min(
                      Number(e.target.value),
                      safeValue[1],
                    );
                    onChange([newMin, safeValue[1]]);
                  }}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
                <span className="text-gray-500">~</span>
                <input
                  type="number"
                  min={safeValue[0]} // 최대값은 현재 지정된 최소값보다 작을 수 없음
                  max={max}
                  step={step}
                  value={safeValue[1]}
                  onChange={(e) => {
                    const newMax = Math.max(
                      Number(e.target.value),
                      safeValue[0],
                    );
                    onChange([safeValue[0], newMax]);
                  }}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
                {unit && <span className="text-sm text-gray-700">{unit}</span>}
              </div>
            ) : (
              // 2. RangeSlider 뷰
              <div className="px-2 py-1">
                <RangeSlider
                  {...props}
                  ref={ref}
                  min={min}
                  max={max}
                  step={step}
                  value={safeValue}
                  onValueChange={onChange}
                />
              </div>
            )}

            {/* 에러 메시지 */}
            {error && (
              <span className="text-red-500 text-sm mt-1 block">
                {error.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
}

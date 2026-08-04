// libs/ui/src/components/Stepper.tsx
import React from "react";
import { cn } from "@co-panion/utils";

export interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (index: number) => void;
  className?: string;
}

export const Stepper = ({
  steps,
  currentStep,
  onStepClick,
  className,
}: StepperProps) => {
  return (
    <div className={cn("flex items-center w-full", className)}>
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep;
        const isCurrent = idx === currentStep;
        const isPending = idx > currentStep;

        // 미입력(대기 중) 상태는 클릭을 원천 차단(Disabled)하여 폼 유효성 검사 우회 방지
        const isClickable = !isPending && onStepClick;

        return (
          <div key={idx} className="flex items-center flex-1 last:flex-none">
            <div
              onClick={() => isClickable && onStepClick(idx)}
              className={cn(
                "flex items-center gap-2 select-none outline-none",
                isClickable
                  ? "cursor-pointer hover:opacity-80"
                  : "cursor-default",
              )}
              aria-current={isCurrent ? "step" : undefined}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm transition-colors shrink-0",
                  isCompleted && "bg-gray-900 text-white",
                  isCurrent && "bg-gray-900 text-white ring-4 ring-gray-200",
                  isPending && "bg-gray-200 text-gray-400",
                )}
              >
                {isCompleted ? (
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span className="font-semibold">{idx + 1}</span>
                )}
              </div>
              <span
                className={cn(
                  "text-sm whitespace-nowrap",
                  isCurrent
                    ? "text-gray-900 font-bold"
                    : isCompleted
                      ? "text-gray-700 font-medium"
                      : "text-gray-400 font-medium",
                )}
              >
                {step}
              </span>
            </div>

            {/* 단계 사이의 진행 바 (Progress Line) */}
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-[2px] mx-4 transition-colors",
                  isCompleted ? "bg-gray-900" : "bg-gray-200",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

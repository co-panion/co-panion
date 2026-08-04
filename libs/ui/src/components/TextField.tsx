// libs/ui/src/components/TextField.tsx
import React, { forwardRef, useState, useId } from "react";
import { cn } from "@co-panion/utils";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  validationState?: "default" | "invalid" | "valid";
  validationMessage?: string;
  error?: boolean; // 부모(RHF)가 전달하는 에러 상태
  success?: boolean; // 부모(RHF)가 전달하는 검증 통과 상태
  helperText?: string; // 에러, 성공, 또는 기본 안내 메시지
  isPassword?: boolean; // 비밀번호 폼 여부 (우측 눈 아이콘 활성화)
  containerClassName?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      validationState: _validationState,
      validationMessage: _validationMessage,
      error,
      success,
      helperText,
      isPassword = false,
      type: _type,
      id: customId,
      containerClassName,
      className = "",
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = customId || generatedId;

    // UI 종속적인 상태(비밀번호 숨김/보기)만 내부에 유지
    const [showPassword, setShowPassword] = useState(false);

    const inputType = isPassword
      ? showPassword
        ? "text"
        : "password"
      : props.type || "text";

    return (
      <div className={cn("flex flex-col gap-1 w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            id={inputId}
            ref={ref}
            type={inputType}
            className={cn(
              "w-full px-3 py-2 border rounded-md text-sm outline-none transition-colors",
              isPassword && "pr-10",
              error
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : success
                  ? "border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  : "border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-500",
              props.disabled
                ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                : "bg-white",
              className,
            )}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none text-xs"
              aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
            >
              {showPassword ? "👁️" : "🔒"}
            </button>
          )}
        </div>
        {helperText && (
          <span
            className={cn(
              "text-xs",
              error
                ? "text-red-500"
                : success
                  ? "text-green-500"
                  : "text-gray-500",
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";

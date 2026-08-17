// libs/ui/src/components/Textarea.tsx
import React, { forwardRef, useState, useId } from "react";
import { cn } from "@co-panion/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
  containerClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      maxLength,
      id: customId,
      containerClassName,
      className = "",
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const textareaId = customId || generatedId;

    // 비제어/제어 컴포넌트 모두 실시간 글자 수 트래킹을 지원하기 위한 로컬 상태
    const [internalValue, setInternalValue] = useState(
      value || defaultValue || "",
    );
    const currentValue = value !== undefined ? value : internalValue;
    const currentLength = String(currentValue).length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    return (
      <div className={cn("flex flex-col gap-1 w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            id={textareaId}
            ref={ref}
            maxLength={maxLength}
            value={currentValue}
            onChange={handleChange}
            className={cn(
              "w-full px-3 py-2 border rounded-md text-sm outline-none transition-colors resize-y min-h-[100px]",
              error
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-500",
              props.disabled
                ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                : "bg-white",
              className,
            )}
            {...props}
          />
        </div>
        <div className="flex items-start justify-between px-1">
          <span
            className={cn(
              "text-xs flex-1",
              error ? "text-red-500" : "text-gray-500",
            )}
          >
            {helperText}
          </span>
          {maxLength && (
            <span
              className={cn(
                "text-xs pl-2 text-right whitespace-nowrap",
                error || currentLength >= maxLength
                  ? "text-red-500 font-medium"
                  : "text-gray-400",
              )}
            >
              {currentLength} / {maxLength}
            </span>
          )}
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

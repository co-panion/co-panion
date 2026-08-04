// libs/ui/src/components/ToggleSwitch.tsx
import React, { useId } from "react";
import { cn } from "@co-panion/utils";

export interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export const ToggleSwitch = ({
  checked,
  onChange,
  disabled = false,
  label,
  className,
}: ToggleSwitchProps) => {
  const generatedId = useId();
  const switchId = label ? generatedId : undefined;

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          "relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
          checked ? "bg-gray-900" : "bg-gray-200",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <span className="sr-only">
          {label ? `${label} 토글` : "토글 스위치"}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition-transform ease-in-out duration-200",
            checked ? "translate-x-6" : "translate-x-1",
          )}
        />
      </button>
      {label && (
        <label
          htmlFor={switchId}
          className={cn(
            "text-sm font-medium select-none",
            disabled
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 cursor-pointer",
          )}
          onClick={() => {
            if (!disabled) onChange(!checked);
          }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

// libs/ui/src/components/Dropdown.tsx
import React, { useEffect, useRef } from "react";
import { cn } from "@co-panion/utils";

export interface DropdownItem {
  label: string;
  value: string | number;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean; // 로그아웃 등 강조가 필요한 메뉴
}

export type DropdownMenuItem = DropdownItem | "divider";

export interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  trigger: React.ReactNode; // 드롭다운을 여는 기준점(버튼/프로필 등)
  items: DropdownMenuItem[];
  align?: "left" | "right";
  className?: string;
}

export const Dropdown = ({
  isOpen,
  onClose,
  trigger,
  items,
  align = "left",
  className,
}: DropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 외부 클릭(Outside Click) 감지 로직
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 트리거와 레이어를 감싸는 최상위 컨테이너 바깥을 클릭했을 때만 onClose 호출
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {/* 트리거 영역 (부모에서 onClick으로 isOpen 상태를 토글하도록 제어) */}
      <div>{trigger}</div>

      {isOpen && (
        <div
          className={cn(
            "absolute z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all",
            align === "right"
              ? "right-0 origin-top-right"
              : "left-0 origin-top-left",
            className,
          )}
          role="menu"
          aria-orientation="vertical"
        >
          {items.map((item, idx) => {
            if (item === "divider") {
              return (
                <div
                  key={idx}
                  className="border-t border-gray-100 my-1"
                  role="separator"
                />
              );
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={item.disabled}
                onClick={() => {
                  if (item.disabled) return;
                  item.onClick?.();
                  onClose(); // 선택지 클릭 시 즉시 콜백 실행 후 드롭다운 강제 닫힘
                }}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm transition-colors",
                  item.disabled
                    ? "text-gray-400 cursor-not-allowed bg-gray-50"
                    : item.danger
                      ? "text-red-600 hover:bg-red-50"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                )}
                role="menuitem"
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

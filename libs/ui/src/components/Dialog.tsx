// libs/ui/src/components/Dialog.tsx
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@co-panion/utils";

// TODO : [모바일 기기] 터치 이벤트(onTouchStart, onTouchMove, onTouchEnd)를 추가로 바인딩

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  hideBackdropClose?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  draggable?: boolean;
}

const sizeStyles = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
  hideBackdropClose = false,
  size = "md",
  draggable = true,
}: DialogProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    posX: number;
    posY: number;
  }>({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setPosition({ x: 0, y: 0 });
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggable) return;
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setPosition({
        x: dragRef.current.posX + dx,
        y: dragRef.current.posY + dy,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity"
      role="presentation"
      onClick={!hideBackdropClose ? onClose : undefined}
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className={cn(
          "relative w-full bg-white rounded-lg shadow-xl outline-none flex flex-col max-h-[90vh]",
          sizeStyles[size],
        )}

        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "dialog-title" : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div
            onMouseDown={handleMouseDown}
            className={cn(
              "px-6 py-4 border-b border-gray-100 flex-shrink-0",
              draggable ? "cursor-move select-none" : "",
            )}
          >
            <h2
              id="dialog-title"
              className="text-lg font-semibold text-gray-900"
            >
              {title}
            </h2>
          </div>
        )}

        <div className="px-6 py-4 text-sm text-gray-600 flex-1 overflow-y-auto">
          {children}
        </div>

        {actions && (
          <div className="px-6 py-4 bg-gray-50 flex justify-end gap-2 rounded-b-lg border-t border-gray-100 flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

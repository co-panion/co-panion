// libs/ui/src/components/RangeSlider.tsx
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@co-panion/utils";

// Radix Root의 기본 Props를 상속받아 value, defaultValue 등의 타입을 내장합니다.
export interface RangeSliderProps extends React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> {
  className?: string;
}

export const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderProps
>(({ className, ...props }, ref) => {
  // Radix UI는 value 또는 defaultValue 배열의 길이에 따라 핸들(Thumb)의 개수를 결정합니다.
  // 값이 전달되지 않았을 경우를 대비해 기본값 [0] 배열을 폴백으로 설정합니다.
  const values = props.value || props.defaultValue || [0];

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
        <SliderPrimitive.Range className="absolute h-full bg-gray-900" />
      </SliderPrimitive.Track>

      {/* 배열의 길이만큼 동적으로 썸(Thumb) 핸들을 렌더링합니다. (단일 or 양방향 모두 대응) */}
      {values.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="block h-5 w-5 rounded-full border-2 border-gray-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-grab active:cursor-grabbing"
        />
      ))}
    </SliderPrimitive.Root>
  );
});

RangeSlider.displayName = "RangeSlider";

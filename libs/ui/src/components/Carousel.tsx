// libs/ui/src/components/Carousel.tsx
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@co-panion/utils";

export interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  // 고도화된 제어 옵션
  autoplay?: boolean;
  delay?: number; // 자동 넘김 시간 (ms)
  showArrows?: boolean;
  showDots?: boolean;
}

export function Carousel({
  children,
  className,
  autoplay = false,
  delay = 4000,
  showArrows = false,
  showDots = false,
}: CarouselProps) {
  // 1. 플러그인 동적 설정 (마우스 호버 시 자동 정지 포함)
  const plugins = React.useMemo(() => {
    return autoplay
      ? [Autoplay({ delay, stopOnInteraction: true, stopOnMouseEnter: true })]
      : [];
  }, [autoplay, delay]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  // 2. 이벤트 핸들러 바인딩
  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // 초기 상태 동기화
    setScrollSnaps(emblaApi.scrollSnapList()); // 인디케이터 갯수 동기화
    emblaApi.on("select", onSelect); // 슬라이드 변경 시 이벤트 리스너

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative", className)}>
      {/* 캐러셀 뷰포트 */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child) => (
            <div className="min-w-0 flex-[0_0_100%] pl-4 first:pl-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 화살표 네비게이션 */}
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
            aria-label="이전 슬라이드"
          >
            &#10094; {/* 좌측 화살표 (향후 아이콘 라이브러리로 교체 권장) */}
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
            aria-label="다음 슬라이드"
          >
            &#10095; {/* 우측 화살표 */}
          </button>
        </>
      )}

      {/* 하단 점(Dot) 인디케이터 */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                index === selectedIndex
                  ? "bg-gray-900 w-4"
                  : "bg-gray-400 opacity-50 hover:opacity-100",
              )}
              aria-label={`${index + 1}번 슬라이드로 이동`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

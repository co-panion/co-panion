// libs/ui/src/components/Carousel.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    autoplay: { control: "boolean", description: "자동 넘김 활성화 여부" },
    delay: { control: "number", description: "자동 넘김 지연 시간 (ms)" },
    showArrows: {
      control: "boolean",
      description: "좌우 이동 화살표 노출 여부",
    },
    showDots: { control: "boolean", description: "하단 인디케이터 노출 여부" },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl mx-auto py-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// 공통 슬라이드 렌더링 함수 (클릭 및 호버 동작 확인용)
const renderMockSlides = () => [
  <div className="flex h-64 w-full items-center justify-center rounded-xl bg-blue-50 text-2xl font-bold text-blue-600 shadow-inner border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">
    배너 1 (마우스 호버 시 멈춤)
  </div>,
  <div className="flex h-64 w-full items-center justify-center rounded-xl bg-emerald-50 text-2xl font-bold text-emerald-600 shadow-inner border border-emerald-100 cursor-pointer hover:bg-emerald-100 transition-colors">
    배너 2 (마우스 호버 시 멈춤)
  </div>,
  <div className="flex h-64 w-full items-center justify-center rounded-xl bg-rose-50 text-2xl font-bold text-rose-600 shadow-inner border border-rose-100 cursor-pointer hover:bg-rose-100 transition-colors">
    배너 3 (마우스 호버 시 멈춤)
  </div>,
];

// 1. 기본 캐러셀 (컨트롤 옵션 비활성화)
export const Default: Story = {
  args: {
    showArrows: false,
    showDots: false,
    autoplay: false,
  },
  render: (args) => <Carousel {...args}>{renderMockSlides()}</Carousel>,
};

// 2. 컨트롤 UI 포함 (화살표 및 인디케이터)
export const WithControls: Story = {
  args: {
    showArrows: true,
    showDots: true,
    autoplay: false,
  },
  render: (args) => <Carousel {...args}>{renderMockSlides()}</Carousel>,
};

// 3. 자동 재생 인터랙션 (호버 시 멈춤 동작 및 2초 딜레이 테스트)
export const AutoplayInteractive: Story = {
  args: {
    showArrows: true,
    showDots: true,
    autoplay: true,
    delay: 2000,
  },
  render: (args) => <Carousel {...args}>{renderMockSlides()}</Carousel>,
};

// 실제 이미지 배너를 테스트하기 위한 더미 데이터 함수
const renderImageSlides = () => [
  // 슬라이드 1
  <a href="#" className="block relative h-64 w-full overflow-hidden rounded-xl">
    <img
      src="https://picsum.photos/seed/banner1/800/400"
      alt="프로모션 배너 1"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </a>,
  // 슬라이드 2
  <a href="#" className="block relative h-64 w-full overflow-hidden rounded-xl">
    <img
      src="https://picsum.photos/seed/banner2/800/400"
      alt="프로모션 배너 2"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </a>,
];

// 스토리북 항목 추가
export const WithRealImages: Story = {
  args: {
    showArrows: true,
    showDots: true,
    autoplay: true,
  },
  // 생성한 더미 이미지 슬라이드를 자식 영역(children)으로 주입
  render: (args) => <Carousel {...args}>{renderImageSlides()}</Carousel>,
};

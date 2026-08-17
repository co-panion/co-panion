// libs/ui/src/components/RangeSlider.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RangeSlider } from "./RangeSlider";

const meta: Meta<typeof RangeSlider> = {
  title: "Components/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-md p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

// 단일 핸들 렌더링
export const SingleValue: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

// 양방향(Dual) 핸들 동적 렌더링 테스트 (실무 적용 타겟)
export const DualRangeInteractive: Story = {
  render: (args) => {
    const [values, setValues] = useState([20, 80]); // 배열 길이가 2이므로 핸들이 2개 렌더링됨

    return (
      <div className="space-y-6">
        <RangeSlider {...args} value={values} onValueChange={setValues} />
        <div className="flex justify-between text-sm font-medium text-gray-700">
          <span>최소: {values[0]}</span>
          <span>최대: {values[1]}</span>
        </div>
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
};

// libs/ui/src/components/Stepper.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: () => {
    // 0: 약관 동의, 1: 기본 정보 입력, 2: 신청서 작성, 3: 완료
    const [step, setStep] = useState(1);
    const steps = ["약관 동의", "기본 정보 입력", "신청서 작성", "완료"];

    return (
      <div className="w-full max-w-4xl p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
        <Stepper
          steps={steps}
          currentStep={step}
          onStepClick={(idx) => setStep(idx)}
        />

        <div className="mt-12 p-8 bg-gray-50 border border-gray-200 rounded-md text-center text-gray-500">
          {steps[step]} 화면 영역
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md disabled:opacity-30 transition-colors hover:bg-gray-50"
          >
            이전 단계
          </button>
          <button
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            disabled={step === steps.length - 1}
            className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-md disabled:opacity-30 transition-colors hover:bg-gray-800"
          >
            다음 단계
          </button>
        </div>
      </div>
    );
  },
};

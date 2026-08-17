// libs/ui/src/components/Textarea.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

// 🚨 에러 원인: 이 default export 구문이 누락되었기 때문입니다.
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "상세 내용",
    placeholder: "내용을 입력해주세요.",
  },
};

export const WithMaxLengthAndCounter: Story = {
  render: () => {
    const [text, setText] = useState("");
    return (
      <Textarea
        label="보호동물 특이사항"
        placeholder="건강 상태나 성격 등 특징을 상세히 적어주세요."
        maxLength={500}
        value={text}
        onChange={(e) => setText(e.target.value)}
        helperText="최대 500자까지 입력 가능합니다."
      />
    );
  },
};

export const ErrorState: Story = {
  args: {
    label: "반려 사유",
    placeholder: "반려 사유를 입력해주세요.",
    error: true,
    helperText: "반려 사유는 필수 입력 항목입니다.",
    maxLength: 100,
    defaultValue: "입력된 내용이 없습니다.",
  },
};

// libs/ui/src/components/TextField.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean" },
    success: { control: "boolean" },
    isPassword: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력해주세요",
    helperText: "가입 시 등록할 실명을 입력해주세요.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "이메일",
    placeholder: "example@email.com",
    defaultValue: "wrong-email-format",
    error: true,
    helperText: "올바른 이메일 형식이 아닙니다.",
  },
};

export const SuccessState: Story = {
  args: {
    label: "이메일",
    placeholder: "example@email.com",
    defaultValue: "co-panion@email.com",
    success: true,
    helperText: "사용 가능한 이메일입니다.",
  },
};

export const PasswordMode: Story = {
  args: {
    label: "비밀번호",
    isPassword: true,
    placeholder: "비밀번호를 입력하세요",
    defaultValue: "secret1234!",
  },
};

export const Disabled: Story = {
  args: {
    label: "소속 기관 (수정 불가)",
    placeholder: "기관명을 입력하세요",
    defaultValue: "남부여성발전센터",
    disabled: true,
  },
};

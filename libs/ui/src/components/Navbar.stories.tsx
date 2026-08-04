// libs/ui/src/components/Navbar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Layout/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LoggedOut: Story = {
  args: {
    user: null,
  },
};

export const NormalUser_NoProfileImage: Story = {
  args: {
    user: {
      nickname: "강아지사랑하는사람입니다", // 긴 닉네임 말줄임 테스트
      role: "user",
      profileImage: null,
    },
    notificationCount: 3, // 알림 뱃지 활성화
  },
};

export const ShelterAdmin_WithProfileImage: Story = {
  args: {
    user: {
      nickname: "행복보호소",
      role: "shelter",
      profileImage:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=100&h=100",
    },
    notificationCount: 0,
  },
};

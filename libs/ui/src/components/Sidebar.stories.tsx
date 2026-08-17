// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  args: {
    logo: <span className="text-lg font-bold text-gray-900">Co-Panion</span>,
    items: [
      { label: "대시보드", isActive: true },
      { label: "반려동물 관리", isActive: false },
      { label: "입양 신청 현황", isActive: false },
      { label: "설정", isActive: false },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};

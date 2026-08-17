// libs/ui/src/components/Dropdown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="h-64 p-8 flex justify-center">
        <Dropdown
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          align="left"
          trigger={
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              메뉴 열기 {isOpen ? "▲" : "▼"}
            </button>
          }
          items={[
            {
              label: "내 정보 관리",
              value: "profile",
              onClick: () => alert("내 정보"),
            },
            { label: "입양 신청 내역", value: "history" },
            "divider",
            {
              label: "시스템 설정 (접근 불가)",
              value: "settings",
              disabled: true,
            },
            "divider",
            {
              label: "로그아웃",
              value: "logout",
              danger: true,
              onClick: () => alert("로그아웃"),
            },
          ]}
        />
      </div>
    );
  },
};

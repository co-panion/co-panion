// libs/ui/src/components/AuthModal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AuthModal } from "./AuthModal";

const meta: Meta<typeof AuthModal> = {
  title: "Components/AuthModal",
  component: AuthModal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthModal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-8 flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
        >
          로그인 필수 기능 (예: 입양 신청) 클릭 테스트
        </button>

        <AuthModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onLoginClick={() => alert("로그인 페이지(/login)로 라우팅합니다.")}
        />
      </div>
    );
  },
};

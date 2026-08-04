// libs/ui/src/components/Dialog.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
        >
          모달 열기
        </button>
        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="안내 팝업"
          actions={
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium"
            >
              확인
            </button>
          }
        >
          <p>
            마우스 드래그로 이동할 수 있으며, ESC 또는 배경 클릭 시 닫힙니다.
          </p>
        </Dialog>
      </div>
    );
  },
};

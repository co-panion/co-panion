// libs/ui/src/components/Pagination.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    // 예시: 총 12페이지인 목록 게시판
    const [page, setPage] = useState(1);

    return (
      <div className="flex flex-col gap-6 items-center py-8 p-4 border border-dashed border-gray-200 rounded-lg">
        <div className="text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
          현재 선택된 페이지:{" "}
          <span className="text-gray-900 font-bold">{page}</span> / 12
        </div>

        <Pagination currentPage={page} totalPages={12} onPageChange={setPage} />
      </div>
    );
  },
};

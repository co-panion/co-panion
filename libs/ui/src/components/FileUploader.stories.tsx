// libs/ui/src/components/FileUploader.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { FileUploader } from "./FileUploader";

const meta: Meta<typeof FileUploader> = {
  title: "Components/FileUploader",
  component: FileUploader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  args: {
    label: "사진 첨부 (최대 4개)",
    maxFiles: 4,
    maxSizeMB: 5,
    helperText: "jpg, png 파일만 업로드 가능합니다.",
  },
};

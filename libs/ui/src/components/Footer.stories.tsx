// libs/ui/src/components/Footer.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    onLinkClick: (path: string) => {
      alert(`다음 경로로 라우팅합니다: ${path}`);
    },
  },
};

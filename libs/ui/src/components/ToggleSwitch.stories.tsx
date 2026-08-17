// libs/ui/src/components/ToggleSwitch.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ToggleSwitch } from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <ToggleSwitch
        checked={checked}
        onChange={setChecked}
        label="알림 수신 동의"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ToggleSwitch
        checked={true}
        onChange={() => {}}
        disabled
        label="활성화됨 (수정 불가)"
      />
      <ToggleSwitch
        checked={false}
        onChange={() => {}}
        disabled
        label="비활성화됨 (수정 불가)"
      />
    </div>
  ),
};

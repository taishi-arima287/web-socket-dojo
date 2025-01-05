import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "送信する",
  },
};

export const Disabled: Story = {
  args: {
    children: "送信する",
    disabled: true,
  },
};

export const CustomClass: Story = {
  args: {
    children: "送信する",
    className: "bg-green-500",
  },
};

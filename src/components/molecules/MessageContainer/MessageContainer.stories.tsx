import type { Meta, StoryObj } from "@storybook/react";
import { MessageContainer } from "./MessageContainer";

const meta = {
  title: "Components/molecules/MessageContainer",
  component: MessageContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MessageContainer>;

export default meta;
type Story = StoryObj<typeof MessageContainer>;

export const Default: Story = {
  args: {
    messages: [
      { id: 1, content: "こんにちは" },
      { id: 2, content: "お元気ですか？" },
    ],
  },
};

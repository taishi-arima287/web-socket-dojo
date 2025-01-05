import type { Meta, StoryObj } from "@storybook/react";
import { TextBox } from "./TextBox";

const meta = {
  title: "Components/TextBox",
  component: TextBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  args: {
    placeholder: "メッセージを入力",
    value: "",
    onChange: () => {},
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "メッセージを入力",
    value: "テストメッセージ",
    onChange: () => {},
  },
};

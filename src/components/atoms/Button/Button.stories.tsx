import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '送信する',
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    children: '送信する',
    onClick: () => {},
    disabled: true,
  },
};

export const CustomClass: Story = {
  args: {
    children: '送信する',
    className: 'bg-green-500',
  },
};
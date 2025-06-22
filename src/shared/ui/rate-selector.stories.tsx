import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import RateSelector from "./rate-selector";

const meta = {
  title: "ui/RateSelector",
  component: RateSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof RateSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    num: 1,
    isSelect: false,
  },
};

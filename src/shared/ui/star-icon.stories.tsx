import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import StarIcon from "./star-icon";

const meta = {
  title: "ui/StarIcon",
  component: StarIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof StarIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

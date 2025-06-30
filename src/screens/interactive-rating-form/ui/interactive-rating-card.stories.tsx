import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import InteractiveRatingCard from "./interactive-rating-card";

const meta = {
  title: "interactiveRatingPage/InteractiveRatingCard",
  component: InteractiveRatingCard,
  tags: ["autodocs"],
} satisfies Meta<typeof InteractiveRatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type {
  Meta,
  StoryObj,
} from "@storybook/react-vite";

import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">
        Design System Heading
      </Typography>

      <Typography variant="h2">
        Build scalable interfaces
      </Typography>

      <Typography variant="h3">
        Professional component architecture
      </Typography>
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div className="max-w-xl space-y-4">
      <Typography variant="body">
        Atlas UI is a scalable and reusable design
        system focused on accessibility,
        consistency and premium user experience.
      </Typography>

      <Typography variant="small">
        Small supporting text for secondary
        information.
      </Typography>

      <Typography variant="muted">
        Muted text state
      </Typography>
    </div>
  ),
};
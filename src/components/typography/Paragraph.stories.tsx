import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

// Add this default export
const meta: Meta<typeof Paragraph> = {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
    },
  },
};

export default meta; // This was missing

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is a paragraph text.',
  },
};
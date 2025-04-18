import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/Data Entry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: { canvas: { sourceState: 'shown' } }, // Helps with module loading
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args) => <TextInput {...args} />, // Explicit render helps loading
  args: {
    placeholder: 'Enter text...'
  }
};
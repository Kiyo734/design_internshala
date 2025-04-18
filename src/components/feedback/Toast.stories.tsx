import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
// 1. REQUIRED DEFAULT EXPORT (meta configuration)
const meta: Meta<typeof Toast> = {
  title: 'components/Feedback/Toast',  // Organized under Feedback category
  component: Toast,  // Links to your component
  tags: ['autodocs'],  // Enables automatic documentation
  argTypes: {  // Defines control panel options
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Visual style variant'
    },
    message: {
      control: 'text',
      description: 'Toast content text'
    },
    duration: {
      control: { 
        type: 'number', 
        min: 1000, 
        max: 10000,
        step: 500 
      },
      description: 'Auto-close duration in ms'
    },
    onClose: {
      action: 'closed',
      description: 'Callback when toast closes'
    }
  },
  parameters: {
    layout: 'centered',  // Optional: Controls story layout
  }
} satisfies Meta<typeof Toast>;

export default meta;  // ← THIS WAS MISSING AND CAUSING THE ERROR

// 2. Story definitions
type Story = StoryObj<typeof Toast>;

// Basic Toast
export const Default: Story = {
  args: {
    message: 'Operation completed successfully!'
  }
};

// Success Variant
export const SuccessToast: Story = {
  args: {
    variant: 'success',
    message: 'Data saved successfully!'
  }
};

// Error Variant
export const ErrorToast: Story = {
  args: {
    variant: 'error',
    message: 'Failed to save data!'
  }
};

// With Custom Duration
export const LongDurationToast: Story = {
  args: {
    duration: 5000,
    message: 'This toast will stay for 5 seconds'
  }
};
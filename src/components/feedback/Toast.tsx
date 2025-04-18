import React from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  variant?: Variant;
  duration?: number;
  onClose?: () => void;
}

const variantClasses: Record<Variant, string> = {
  success: 'bg-green-100 text-green-800',
  error: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
  info: 'bg-blue-100 text-blue-800',
};

export const Toast = ({
  message,
  variant = 'info',
  duration = 3000,
  onClose,
}: ToastProps) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className={twMerge(
        'fixed bottom-4 right-4 p-4 rounded-lg shadow-lg max-w-xs',
        variantClasses[variant]
      )}
    >
      <p>{message}</p>
    </div>
  );
};
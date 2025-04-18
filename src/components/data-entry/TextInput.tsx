import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'outline' | 'filled' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses = {
  outline: 'border border-gray-300 focus:ring-2 focus:ring-blue-500',
  filled: 'bg-gray-100 border-none focus:bg-white focus:ring-2',
  ghost: 'border-none bg-transparent focus:underline'
};

const sizeClasses = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-3 text-base',
  lg: 'py-3 px-4 text-lg'
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      label,
      error,
      leftIcon,
      rightIcon,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-1">
        {label && <label className="block text-sm font-medium">{label}</label>}
        <div className="relative flex items-center">
          {leftIcon && <span className="absolute left-3">{leftIcon}</span>}
          <input
            ref={ref}
            className={twMerge(
              'w-full rounded-md transition-all',
              variantClasses[variant],
              sizeClasses[size],
              leftIcon ? 'pl-10' : '',
              rightIcon ? 'pr-10' : '',
              error ? 'border-red-500 focus:ring-red-500' : '',
              className
            )}
            aria-invalid={!!error}
            {...props}
          />
          {rightIcon && <span className="absolute right-3">{rightIcon}</span>}
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
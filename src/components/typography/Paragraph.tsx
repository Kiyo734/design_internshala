import React from 'react';
import { twMerge } from 'tailwind-merge';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
type TextAlign = 'left' | 'center' | 'right' | 'justify';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  muted?: boolean;
}

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl'
};

const weightClasses: Record<TextWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
};

const alignClasses: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify'
};

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      size = 'base',
      weight = 'normal',
      align = 'left',
      muted = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <p
        ref={ref}
        className={twMerge(
          sizeClasses[size],
          weightClasses[weight],
          alignClasses[align],
          muted ? 'text-gray-500' : 'text-gray-900',
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';
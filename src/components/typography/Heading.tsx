// src/components/typography/Heading.tsx
import { twMerge } from 'tailwind-merge';
import React from 'react';



interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const sizeClasses = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium'
};

export const Heading = ({
  as = 'h1',
  className = '',
  children,
  ...props
}: HeadingProps) => {
  const Component = as;
  return (
    <Component 
      className={twMerge(sizeClasses[as], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
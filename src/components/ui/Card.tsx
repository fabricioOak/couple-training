import { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={clsx('bg-white p-6 rounded-lg shadow-sm border border-gray-200', className)}
      {...props}
    >
      {children}
    </div>
  );
}

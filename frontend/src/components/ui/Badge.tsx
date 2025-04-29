import React from 'react';

type BadgeVariant = 'default' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variantClasses = {
    default: 'bg-primary-700 text-secondary-500',
    secondary: 'bg-secondary-500 text-primary-900',
    accent: 'bg-accent-500 text-white',
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-primary-900',
    error: 'bg-error-500 text-white',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
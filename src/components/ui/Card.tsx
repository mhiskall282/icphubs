import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  glassmorphism?: boolean;
  border?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  glassmorphism = false,
  border = false
}) => {
  const baseClasses = 'rounded-lg overflow-hidden';
  const hoverClasses = hoverable ? 'transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-gold' : '';
  const glassClasses = glassmorphism ? 'backdrop-blur-sm bg-primary-900/40 border border-primary-800' : 'bg-primary-800';
  const borderClasses = border && !glassmorphism ? 'border border-primary-700' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${glassClasses} ${borderClasses} ${className}`}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-5 border-b border-primary-700 ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-5 border-t border-primary-700 ${className}`}>
      {children}
    </div>
  );
};
import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  className = '',
  showPercentage = false,
  size = 'md',
  variant = 'default'
}) => {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  
  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };
  
  const variantClasses = {
    default: 'bg-secondary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500'
  };
  
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-primary-700 rounded-full overflow-hidden">
        <div 
          className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full transition-all duration-300 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && (
        <div className="mt-1 text-xs text-secondary-300 text-right">
          {percentage}% ({value}/{max})
        </div>
      )}
    </div>
  );
};
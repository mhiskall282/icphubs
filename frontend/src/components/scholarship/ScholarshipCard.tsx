import React from 'react';
import { Clock, Book, FileText, Award, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ScholarshipRequest, ScholarshipCategory } from '../../types';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { formatDate, formatCurrency } from '../../utils/formatters';

// Map category to icon
const categoryIcons: Record<ScholarshipCategory, React.ReactNode> = {
  [ScholarshipCategory.BOOKS]: <Book size={14} />,
  [ScholarshipCategory.EXAMS]: <FileText size={14} />,
  [ScholarshipCategory.SUPPLIES]: <Award size={14} />,
  [ScholarshipCategory.COURSES]: <Clock size={14} />,
  [ScholarshipCategory.OTHER]: <DollarSign size={14} />
};

// Map status to badge variant
const statusBadgeVariant = {
  'Pending': 'warning',
  'Active': 'accent',
  'Funded': 'success',
  'Completed': 'default'
} as const;

interface ScholarshipCardProps {
  scholarship: ScholarshipRequest;
  studentName?: string;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  scholarship,
  studentName
}) => {
  const navigate = useNavigate();
  const progressPercentage = Math.round((scholarship.amountRaised / scholarship.amount) * 100);
  
  return (
    <Card 
      hoverable 
      className="h-full flex flex-col transition-all duration-300"
    >
      <CardContent className="flex-grow">
        <div className="flex justify-between items-start mb-3">
          <Badge variant={statusBadgeVariant[scholarship.status]}>
            {scholarship.status}
          </Badge>
          <Badge variant="secondary" className="flex items-center">
            {categoryIcons[scholarship.category]}
            <span className="ml-1">{scholarship.category}</span>
          </Badge>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {scholarship.title}
        </h3>
        
        {studentName && (
          <p className="text-sm text-gray-400 mb-2">
            By {studentName}
          </p>
        )}
        
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {scholarship.description}
        </p>
        
        <div className="mb-3">
          <ProgressBar 
            value={scholarship.amountRaised} 
            max={scholarship.amount}
            variant={progressPercentage >= 100 ? 'success' : 'default'}
          />
        </div>
        
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-secondary-500 font-medium">
            {formatCurrency(scholarship.amountRaised)}
          </span>
          <span className="text-gray-400">
            of {formatCurrency(scholarship.amount)}
          </span>
        </div>
        
        <div className="text-xs text-gray-400">
          Created {formatDate(scholarship.createdAt)}
        </div>
      </CardContent>
      
      <CardFooter className="pt-3 border-t border-primary-700">
        <Button 
          variant="primary"
          fullWidth
          onClick={() => navigate(`/scholarships/${scholarship.id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
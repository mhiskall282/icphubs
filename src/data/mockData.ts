import { Student, Donor, ScholarshipRequest, ScholarshipCategory, RequestStatus, Transaction, User, AdminStats } from '../types';

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Admin User',
    email: 'admin@microscholar.com',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'admin',
    wallet: 'icp1234...5678',
    status: 'active',
    createdAt: '2023-01-01T00:00:00Z'
  },
  // ... existing mockStudents and mockDonors data
];

export const mockAdminStats: AdminStats = {
  totalUsers: 1234,
  activeUsers: 987,
  totalDonations: 450000,
  totalScholarships: 345
};

// ... rest of existing mock data
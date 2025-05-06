import {
  Student,
  Donor,
  ScholarshipRequest,
  ScholarshipCategory,
  RequestStatus,
  Transaction,
  User,
  AdminStats
} from '../types';

// USERS
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
  }
];

// STUDENTS
export const mockStudents: Student[] = [
  {
    id: 's1',
    name: 'Alice Johnson',
    email: 'alice@student.com',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    wallet: 'icp5678...1234',
    status: 'active',
    createdAt: '2023-02-01T00:00:00Z',
    gpa: 3.9,
    major: 'Computer Science'
  },
  {
    id: 's2',
    name: 'Bob Smith',
    email: 'bob@student.com',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    wallet: 'icp9876...4321',
    status: 'active',
    createdAt: '2023-03-01T00:00:00Z',
    gpa: 3.7,
    major: 'Mechanical Engineering'
  }
];

// DONORS
export const mockDonors: Donor[] = [
  {
    id: 'd1',
    name: 'Jane Donor',
    email: 'jane@donor.com',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    wallet: 'icpabcd...efgh',
    status: 'active',
    createdAt: '2023-04-01T00:00:00Z',
    organization: 'Tech Philanthropy'
  },
  {
    id: 'd2',
    name: 'John Donor',
    email: 'john@donor.com',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    wallet: 'icpijkl...mnop',
    status: 'active',
    createdAt: '2023-04-15T00:00:00Z',
    organization: 'STEM Funders'
  }
];

// SCHOLARSHIP REQUESTS
export const mockScholarshipRequests: ScholarshipRequest[] = [
  {
    id: 'r1',
    studentId: 's1',
    category: ScholarshipCategory.Tuition,
    amount: 2000,
    status: RequestStatus.Pending,
    createdAt: '2023-05-01T00:00:00Z',
    updatedAt: '2023-05-01T00:00:00Z'
  },
  {
    id: 'r2',
    studentId: 's2',
    category: ScholarshipCategory.Materials,
    amount: 500,
    status: RequestStatus.Approved,
    createdAt: '2023-05-02T00:00:00Z',
    updatedAt: '2023-05-03T00:00:00Z'
  }
];

// TRANSACTIONS
export const mockTransactions: Transaction[] = [
  {
    id: 't1',
    donorId: 'd1',
    studentId: 's1',
    amount: 2000,
    date: '2023-05-04T00:00:00Z',
    requestId: 'r1'
  },
  {
    id: 't2',
    donorId: 'd2',
    studentId: 's2',
    amount: 500,
    date: '2023-05-05T00:00:00Z',
    requestId: 'r2'
  }
];

// ADMIN STATS
export const mockAdminStats: AdminStats = {
  totalUsers: 1234,
  activeUsers: 987,
  totalDonations: 450000,
  totalScholarships: 345
};

export interface User {
  id: string;
  name: string;
  avatar: string;
  wallet: string;
  bio?: string;
  role: 'admin' | 'user' | 'student' | 'donor';
  email: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'suspended';
}

export interface Student extends User {
  school: string;
  major: string;
  graduationYear: number;
  achievements: string[];
}

export interface Donor extends User {
  totalDonated: number;
  donationsCount: number;
}

export interface ScholarshipRequest {
  id: string;
  studentId: string;
  title: string;
  description: string;
  amount: number;
  amountRaised: number;
  category: ScholarshipCategory;
  createdAt: string;
  status: RequestStatus;
  transactions: Transaction[];
}

export enum ScholarshipCategory {
  BOOKS = 'Books',
  EXAMS = 'Exams',
  SUPPLIES = 'Supplies',
  COURSES = 'Courses',
  OTHER = 'Other'
}

export enum RequestStatus {
  PENDING = 'Pending',
  ACTIVE = 'Active',
  FUNDED = 'Funded',
  COMPLETED = 'Completed'
}

export interface Transaction {
  id: string;
  requestId: string;
  donorId: string;
  amount: number;
  timestamp: string;
  blockchainTxHash: string;
}

export interface WalletInfo {
  address: string;
  balance: number;
  connected: boolean;
}

export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalDonations: number;
  totalScholarships: number;
}
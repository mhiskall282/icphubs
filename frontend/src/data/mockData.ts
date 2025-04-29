import { Student, Donor, ScholarshipRequest, ScholarshipCategory, RequestStatus, Transaction } from '../types';

export const mockStudents: Student[] = [
  {
    id: 's1',
    name: 'Aisha Johnson',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
    wallet: 'icp78a2e4d3b5f6c7',
    school: 'Stanford University',
    major: 'Computer Science',
    graduationYear: 2025,
    bio: 'Passionate about AI and blockchain technology. Working on research projects focused on decentralized systems.',
    achievements: ['Hackathon Winner 2023', 'Dean\'s List 2022-2023']
  },
  {
    id: 's2',
    name: 'Marcus Chen',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    wallet: 'icp65d4f3c2b1a9e8',
    school: 'MIT',
    major: 'Electrical Engineering',
    graduationYear: 2024,
    bio: 'Researching renewable energy solutions and IoT applications. Interned at Tesla last summer.',
    achievements: ['Research Grant Recipient', 'Published in IEEE Journal']
  },
  {
    id: 's3',
    name: 'Sophia Rodriguez',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    wallet: 'icp43b2a1c9d8e7f6',
    school: 'University of California, Berkeley',
    major: 'Data Science',
    graduationYear: 2026,
    bio: 'First-generation college student passionate about using data for social good. Working with nonprofits on education inequality research.',
    achievements: ['First Gen Student Scholarship', 'Community Leadership Award']
  }
];

export const mockDonors: Donor[] = [
  {
    id: 'd1',
    name: 'Dr. Eleanor Hayes',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    wallet: 'icp12e3d4c5b6a7f8',
    bio: 'Professor of Computer Science and advocate for diversity in STEM. Looking to support promising students in tech fields.',
    totalDonated: 5800,
    donationsCount: 12
  },
  {
    id: 'd2',
    name: 'Robert Washington',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    wallet: 'icp34f5e6d7c8b9a1',
    bio: 'Tech entrepreneur and angel investor. Passionate about supporting the next generation of innovators.',
    totalDonated: 12500,
    donationsCount: 8
  },
  {
    id: 'd3',
    name: 'Skylar Tech Foundation',
    avatar: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=150',
    wallet: 'icp98a7b6c5d4e3f2',
    bio: 'Nonprofit organization focused on advancing education in technology fields. We support students with demonstrated financial need and academic excellence.',
    totalDonated: 45000,
    donationsCount: 32
  }
];

// Generate some random transactions
const generateTransactions = (requestId: string, count: number): Transaction[] => {
  const transactions: Transaction[] = [];
  const donorIds = mockDonors.map(d => d.id);
  
  for (let i = 0; i < count; i++) {
    // Random donor from our list
    const donorId = donorIds[Math.floor(Math.random() * donorIds.length)];
    // Random amount between $50 and $500
    const amount = Math.floor(Math.random() * 451) + 50;
    
    // Random date in the past 30 days
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    
    transactions.push({
      id: `tx-${requestId}-${i}`,
      requestId,
      donorId,
      amount,
      timestamp: date.toISOString(),
      blockchainTxHash: `icp_tx_${Math.random().toString(36).substring(2, 15)}`
    });
  }
  
  return transactions;
};

export const mockScholarshipRequests: ScholarshipRequest[] = [
  {
    id: 'req1',
    studentId: 's1',
    title: 'Machine Learning Conference Registration',
    description: 'Seeking funding to attend the International Conference on Machine Learning (ICML) where I will be presenting my research on federated learning systems for healthcare applications.',
    amount: 1200,
    amountRaised: 850,
    category: ScholarshipCategory.COURSES,
    createdAt: '2023-12-10T15:34:12Z',
    status: RequestStatus.ACTIVE,
    transactions: generateTransactions('req1', 3)
  },
  {
    id: 'req2',
    studentId: 's2',
    title: 'Electrical Engineering Textbooks',
    description: 'Need help purchasing required textbooks for my advanced electrical engineering courses this semester. Books include "Principles of Power Systems" and "Advanced Electronic Circuits Design."',
    amount: 450,
    amountRaised: 450,
    category: ScholarshipCategory.BOOKS,
    createdAt: '2023-11-28T09:12:45Z',
    status: RequestStatus.FUNDED,
    transactions: generateTransactions('req2', 2)
  },
  {
    id: 'req3',
    studentId: 's3',
    title: 'Statistical Analysis Software License',
    description: 'Requesting funds for a one-year license for specialized statistical analysis software required for my research project on educational outcomes in underserved communities.',
    amount: 350,
    amountRaised: 175,
    category: ScholarshipCategory.SUPPLIES,
    createdAt: '2023-12-15T11:23:18Z',
    status: RequestStatus.ACTIVE,
    transactions: generateTransactions('req3', 1)
  },
  {
    id: 'req4',
    studentId: 's1',
    title: 'Blockchain Certification Exam Fees',
    description: 'Seeking support for the fees associated with taking the Certified Blockchain Developer examination, which will enhance my credentials for research and job opportunities in decentralized systems.',
    amount: 650,
    amountRaised: 0,
    category: ScholarshipCategory.EXAMS,
    createdAt: '2023-12-20T16:45:33Z',
    status: RequestStatus.PENDING,
    transactions: []
  },
  {
    id: 'req5',
    studentId: 's2',
    title: 'Laboratory Equipment for Senior Project',
    description: 'Need assistance purchasing specialized components for my senior project on renewable energy harvesting systems. Parts include solar cells, microcontrollers, and voltage regulators.',
    amount: 825,
    amountRaised: 620,
    category: ScholarshipCategory.SUPPLIES,
    createdAt: '2023-12-05T08:56:21Z',
    status: RequestStatus.ACTIVE,
    transactions: generateTransactions('req5', 4)
  },
  {
    id: 'req6',
    studentId: 's3',
    title: 'Data Science Bootcamp Tuition',
    description: 'Requesting funding for an intensive weekend data science bootcamp focusing on advanced Python libraries for data analysis and visualization, which will support my research work.',
    amount: 950,
    amountRaised: 950,
    category: ScholarshipCategory.COURSES,
    createdAt: '2023-11-15T14:22:07Z',
    status: RequestStatus.COMPLETED,
    transactions: generateTransactions('req6', 5)
  }
];
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ScholarshipProvider } from './context/ScholarshipContext';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { DashboardPage } from './pages/DashboardPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { StatsPage } from './pages/StatsPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotificationsPage } from './pages/NotificationsPage';
import { AIAssistantPage } from './pages/AIAssistantPage';
import { ICPWalletPage } from './pages/ICPWalletPage';
import { SettingsPage } from './pages/SettingsPage';
import { HelpPage } from './pages/HelpPage';
import { CoursesPage } from './pages/CoursesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogPage } from './pages/BlogPage';
import { EventsPage } from './pages/EventsPage';
import { MembersPage } from './pages/MembersPage';
import { ForumPage } from './pages/ForumPage';
import { ICPGovernancePage } from './pages/ICPGovernancePage';
import { ICPStakingPage } from './pages/ICPStakingPage';
import { ICPSwapPage } from './pages/ICPSwapPage';
import { ICPBridgePage } from './pages/ICPBridgePage';
import { ICPNFTPage } from './pages/ICPNFTPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ScholarshipProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/ai-assistant" element={<AIAssistantPage />} />
              <Route path="/wallet" element={<ICPWalletPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/governance" element={<ICPGovernancePage />} />
              <Route path="/staking" element={<ICPStakingPage />} />
              <Route path="/swap" element={<ICPSwapPage />} />
              <Route path="/bridge" element={<ICPBridgePage />} />
              <Route path="/nft" element={<ICPNFTPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </ScholarshipProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
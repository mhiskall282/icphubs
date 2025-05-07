import React, { useState } from 'react';
import { Menu, X, ChevronDown, Wallet, LogOut, User, Trophy, BarChart, Bell, Settings, HelpCircle, Bot, Book, Newspaper, Calendar, Users, FileText, Coins, Grid as Bridge, Vote, MessageSquare } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';
import { Menu as HeadlessMenu } from '@headlessui/react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { currentUser, wallet, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const mainNavLinks = [
    { title: 'Home', path: '/' },
    {
      title: 'Learn',
      submenu: [
        { title: 'Courses', path: '/courses', icon: Book },
        { title: 'Resources', path: '/resources', icon: FileText },
        { title: 'Blog', path: '/blog', icon: Newspaper },
        { title: 'Events', path: '/events', icon: Calendar },
      ]
    },
    {
      title: 'Community',
      submenu: [
        { title: 'Members', path: '/members', icon: Users },
        { title: 'Forum', path: '/forum', icon: MessageSquare },
        { title: 'Leaderboard', path: '/leaderboard', icon: Trophy },
        { title: 'Stats', path: '/stats', icon: BarChart },
      ]
    },
    {
      title: 'ICP Features',
      submenu: [
        { title: 'Governance', path: '/governance', icon: Vote },
        { title: 'Staking', path: '/staking', icon: Coins },
        { title: 'Bridge', path: '/bridge', icon: Bridge },
        { title: 'NFT Gallery', path: '/nft', icon: Image },
      ]
    },
    { title: 'Explore', path: '/explore' },
    { title: 'AI Assistant', path: '/ai-assistant', icon: Bot },
  ];

  const renderSubmenu = (submenu: any[]) => (
    <HeadlessMenu>
      {({ open }) => (
        <div className="relative">
          <HeadlessMenu.Button className="px-3 py-2 text-sm font-medium transition-colors flex items-center text-gray-300 hover:text-secondary-400">
            <span>Learn</span>
            <ChevronDown size={16} className={`ml-1 transform transition-transform ${open ? 'rotate-180' : ''}`} />
          </HeadlessMenu.Button>
          <HeadlessMenu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-primary-800 border border-primary-700 rounded-md shadow-lg">
            {submenu.map((item) => (
              <HeadlessMenu.Item key={item.path}>
                {({ active }) => (
                  <Link
                    to={item.path}
                    className={`${
                      active ? 'bg-primary-700 text-white' : 'text-gray-300'
                    } flex items-center px-4 py-2 text-sm`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon size={16} className="mr-2" />}
                    {item.title}
                  </Link>
                )}
              </HeadlessMenu.Item>
            ))}
          </HeadlessMenu.Items>
        </div>
      )}
    </HeadlessMenu>
  );

  return (
    <header className="bg-primary-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-secondary-500 font-bold text-xl">Micro</span>
              <span className="text-white font-bold text-xl">Scholar</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            {mainNavLinks.map((link) => (
              link.submenu ? (
                <div key={link.title} className="relative group">
                  {renderSubmenu(link.submenu)}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${
                    location.pathname === link.path
                      ? 'text-secondary-500'
                      : 'text-gray-300 hover:text-secondary-400'
                  }`}
                >
                  {link.icon && <link.icon size={16} className="mr-1" />}
                  {link.title}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/notifications"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Bell size={20} />
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="flex items-center space-x-2 text-white hover:text-secondary-400 focus:outline-none transition"
                  >
                    <img
                      src={currentUser?.avatar}
                      alt={currentUser?.name}
                      className="h-8 w-8 rounded-full object-cover border border-secondary-500"
                    />
                    <span className="text-sm font-medium">{currentUser?.name}</span>
                    <ChevronDown size={16} />
                  </button>

                  {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 py-2 bg-primary-800 rounded-md shadow-lg border border-primary-700">
                      <div className="px-4 py-2 border-b border-primary-700">
                        <p className="text-sm text-white font-medium">{currentUser?.name}</p>
                        <p className="text-xs text-gray-400 truncate">
                          {wallet?.address ? `${wallet.address.substring(0, 8)}...` : 'No wallet connected'}
                        </p>
                      </div>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary-700 hover:text-white flex items-center"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <User size={16} className="mr-2" />
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary-700 hover:text-white flex items-center"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <Settings size={16} className="mr-2" />
                        Settings
                      </Link>
                      <Link
                        to="/help"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary-700 hover:text-white flex items-center"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <HelpCircle size={16} className="mr-2" />
                        Help
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-primary-700 hover:text-white flex items-center"
                        onClick={() => {
                          logout();
                          setProfileMenuOpen(false);
                          navigate('/');
                        }}
                      >
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/register')}
                >
                  Register
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavLinks.map((link) => (
              link.submenu ? (
                <div key={link.title} className="space-y-1">
                  <div className="px-3 py-2 text-base font-medium text-gray-300">
                    {link.title}
                  </div>
                  {link.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-primary-700 hover:text-white pl-6 flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.icon && <subItem.icon size={16} className="mr-2" />}
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
                    location.pathname === link.path
                      ? 'bg-primary-700 text-secondary-500'
                      : 'text-gray-300 hover:bg-primary-700 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon && <link.icon size={16} className="mr-2" />}
                  {link.title}
                </Link>
              )
            ))}
          </div>

          {isAuthenticated ? (
            <div className="pt-4 pb-3 border-t border-primary-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    src={currentUser?.avatar}
                    alt={currentUser?.name}
                    className="h-10 w-10 rounded-full object-cover border border-secondary-500"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{currentUser?.name}</div>
                  <div className="text-sm font-medium text-gray-400 flex items-center">
                    <Wallet size={14} className="mr-1" />
                    {wallet?.address ? (
                      <span className="truncate max-w-[150px]">
                        {wallet.address.substring(0, 8)}...
                      </span>
                    ) : (
                      'No wallet connected'
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-3 px-2 space-y-1">
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-primary-700 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-primary-700 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Settings
                </Link>
                <Link
                  to="/help"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-primary-700 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Help
                </Link>
                <Link
                  to="/notifications"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-primary-700 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Notifications
                </Link>
                <button
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-primary-700 hover:text-white"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                    navigate('/');
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-primary-700 px-5 space-y-2">
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  navigate('/login');
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </Button>
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  navigate('/register');
                  setMobileMenuOpen(false);
                }}
              >
                Register
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

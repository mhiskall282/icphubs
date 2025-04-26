import React, { useState } from 'react';
import { Menu, X, ChevronDown, Wallet, LogOut, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { currentUser, wallet, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setProfileMenuOpen(false);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Explore', path: '/explore' },
    { title: 'How It Works', path: '/how-it-works' },
  ];

  const authLinks = [
    { title: 'Dashboard', path: '/dashboard' },
  ];

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

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-secondary-500'
                    : 'text-gray-300 hover:text-secondary-400'
                }`}
              >
                {link.title}
              </Link>
            ))}
            {isAuthenticated &&
              authLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-secondary-500'
                      : 'text-gray-300 hover:text-secondary-400'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
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
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-primary-700 hover:text-white flex items-center"
                      onClick={handleLogout}
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
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

          <div className="md:hidden flex items-center">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-primary-700 text-secondary-500'
                    : 'text-gray-300 hover:bg-primary-700 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            {isAuthenticated &&
              authLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-primary-700 text-secondary-500'
                      : 'text-gray-300 hover:bg-primary-700 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <div className="pt-4 pb-3 border-t border-primary-700">
            {isAuthenticated ? (
              <>
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
                  <button
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-primary-700 hover:text-white"
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-3 px-2 space-y-1">
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-primary-700 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-secondary-500 hover:bg-primary-700 hover:text-secondary-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
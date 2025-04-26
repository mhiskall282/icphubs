import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Send } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-secondary-500 font-bold text-2xl">Micro</span>
              <span className="text-white font-bold text-2xl">Scholar</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Decentralized micro-scholarships on the Internet Computer Protocol blockchain, 
              connecting students with donors through transparent, direct funding.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-gray-400 hover:text-secondary-500 transition text-sm">
                  Browse Scholarships
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-secondary-500 transition text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-secondary-500 transition text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-secondary-500 transition text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary-500 transition text-sm">
                  ICP Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary-500 transition text-sm">
                  Developer Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary-500 transition text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary-500 transition text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest in decentralized education.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-800 text-white text-sm rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary-500 w-full border border-primary-700"
              />
              <Button 
                variant="primary" 
                size="sm"
                className="rounded-l-none"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MicroScholar. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-secondary-500 transition text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary-500 transition text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary-500 transition text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
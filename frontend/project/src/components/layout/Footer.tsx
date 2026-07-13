import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">EDUST</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Revolutionizing composting with smart technology for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  Product Demo
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">123 Eco Street, Green City, Earth 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-green-500" />
                <span className="text-gray-600 dark:text-gray-400">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-green-500" />
                <span className="text-gray-600 dark:text-gray-400">info@edustcompost.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} EDUST. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Designed with ♥ for a greener planet
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
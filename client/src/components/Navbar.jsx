import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm w-full sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center space-x-10">
            {/* Updated Branding */}
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-emerald-600">
              DekNek
            </Link>

            <ul className="hidden md:flex space-x-8">
              <li>
                <Link to="/dashboard" className="text-gray-500 hover:text-emerald-600 font-medium transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-500 hover:text-emerald-600 font-medium transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="/login" className="text-gray-600 hover:text-emerald-600 font-semibold text-sm">
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
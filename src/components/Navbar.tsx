import React from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">ImpactFunds</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/donate"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Donate
            </Link>
            <Link
              to="/impact"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Impact
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/donate"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
            <Link
              to="/impact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Impact
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

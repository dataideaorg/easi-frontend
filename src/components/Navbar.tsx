import { useState } from 'react';
import logo from '../assets/images/EASI-Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import styles from '../utils/styles';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Training', href: '/training' },
    { name: 'Consultancy', href: '/consultancy' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: 'https://blog.easi.ac.ug/' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Thin Top Banner */}
      <section className="relative bg-gradient-to-r from-[#dd8604] to-[#ff9500] py-2 md:py-3">
        <div className={styles.sections.container}>
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left side - Event info */}
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-2 md:mb-0">
              <span className="text-xs md:text-sm font-semibold bg-white/20 px-2 md:px-3 py-1 rounded-full">
                🚀 Upcoming Event
              </span>
              <span className="text-xs md:text-sm font-medium text-center sm:text-left">Data Management with R Language</span>
            </div>
            
            {/* Right side - Date, location, and buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 text-xs md:text-sm">
              {/* Date and location - hide on very small screens */}
              <div className="hidden sm:flex items-center space-x-3">
                <span>📅 Tuesday, July 29, to Wednesday, July 30, 2025</span>
                <span>📍 Kampala, Uganda</span>
              </div>
              
              {/* Mobile: show only date */}
              <div className="sm:hidden">
                <span>📅 Tuesday, July 29, to Wednesday, July 30, 2025</span>
              </div>
              
              {/* Buttons */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="contained"
                  size="small"
                  href="/#/contact"
                  sx={{ 
                    backgroundColor: 'white',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    minWidth: 'auto',
                    '&:hover': {
                      backgroundColor: '#f8f8f8',
                      color: 'white'
                    },
                    '@media (min-width: 768px)': {
                      px: 3,
                      fontSize: '0.875rem'
                    }
                  }}
                >
                  Express Interest
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className={styles.sections.container}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="EASI Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? `text-[${styles.colors.primary}] bg-[#fff8ee]`
                    : `text-[${styles.colors.dark}] hover:text-[${styles.colors.primary}] hover:bg-[#fff8ee]`
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              sx={{ 
                backgroundColor: '#dd8604', 
                '&:hover': { backgroundColor: '#c77804' },
                textTransform: 'none',
                boxShadow: 'none'
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md text-[${styles.colors.primary}] hover:text-[${styles.colors.primary}] bg-[${styles.colors.light}]` }
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? `text-[${styles.colors.primary}] bg-[#fff8ee]`
                      : `text-[${styles.colors.dark}] hover:text-[${styles.colors.primary}] hover:bg-[#fff8ee]`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                fullWidth
                className={`mt-4 ${styles.buttons.primary}`}
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
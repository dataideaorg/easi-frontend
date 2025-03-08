import { useState } from 'react';
import logo from '../assets/images/EASI-Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import styles from '../utils/styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Programs', href: '/programs' },
    { name: 'Training', href: '/training' },
    { name: 'Courses', href: 'https://courses.easi.ac.ug/' },
    { name: 'Consultancy', href: '/consultancy' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
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
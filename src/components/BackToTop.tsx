import { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll position
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Fab
            color="primary"
            aria-label="back to top"
            onClick={scrollToTop}
            sx={{
              backgroundColor: '#dd8604',
              '&:hover': {
                backgroundColor: '#c77804',
              },
              boxShadow: '0 4px 14px rgba(221, 134, 4, 0.4)'
            }}
          >
            <ArrowUpIcon className="h-6 w-6 text-white" />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Paper, Typography } from '@mui/material';
import { DocumentTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import styles from '../utils/styles';
import resourcesImage from '../assets/images/statistics-hero.jpg'; // Using existing image
import { ENDPOINTS } from '../api/endpoints';
// Animation variants


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Resource: React.FC = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${ENDPOINTS.API_URL}/resources/`)
      .then((response) => {
        setResources(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching resources:', error);
        setError('Failed to load resources. Please try again later.');
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={resourcesImage} 
            alt="Resources" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#dd8604]/90 to-[#333333]/80"></div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#dd8604]/20 blur-3xl"
            animate={{ 
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 ">
          <motion.div 
            className="max-w-3xl text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className={`${styles.typography.h1} mb-6`}
              variants={fadeInUp}
            >
              Resources
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 text-white/90"
              variants={fadeInUp}
            >
              Access our collection of statistics resources, research papers, and datasets
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className={`${styles.sections.padding} ${styles.sections.light}`}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Available Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download educational materials and research papers to enhance your statistical knowledge
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#dd8604]"></div>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <Typography color="error">{error}</Typography>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => window.location.reload()}
                className="mt-4"
              >
                Try Again
              </Button>
            </div>
          ) : resources.length === 0 ? (
            <div className="text-center py-10">
              <Typography>No resources available at the moment.</Typography>
            </div>
          ) : (
            <motion.div 
              className={styles.grids.responsive1to2to3}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {resources.map((resource: any) => (
                <motion.div
                  key={resource.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper className={`${styles.cards.base} h-full flex flex-col`}>
                    <div className="p-6 flex-grow">
                      <div className="flex items-start mb-4">
                        <div className="p-2 rounded-full bg-[#dd8604]/10 mr-4">
                          <DocumentTextIcon className="h-6 w-6 text-[#dd8604]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                          {resource.created_at && (
                            <p className="text-sm text-gray-500 mb-2">
                              Added: {formatDate(resource.created_at)}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {resource.description || 'No description available'}
                      </p>
                    </div>
                    <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                      <Link 
                        to={`${ENDPOINTS.API_URL}/resources/${resource.id}`}
                        className="text-[#dd8604] hover:text-[#c77804] font-medium text-sm"
                      >
                        View Details
                      </Link>
                      <Link 
                        to={`${ENDPOINTS.API_URL}/resources/${resource.id}/download`}
                        className="inline-flex items-center space-x-1 bg-[#dd8604] hover:bg-[#c77804] text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200"
                      >
                        <ArrowDownTrayIcon className="text-white h-4 w-4" />
                        <span className='text-white'>Download</span>
                      </Link>
                    </div>
                  </Paper>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resource;
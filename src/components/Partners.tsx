import React from 'react';
import { Paper } from '@mui/material';
import styles from '../utils/styles';
import partner1 from '../assets/images/partners/partner1.png';
import partner2 from '../assets/images/partners/partner2.png';
import partner3 from '../assets/images/partners/partner3.png';
import partner4 from '../assets/images/partners/partner4.png';
import partner5 from '../assets/images/partners/partner5.png';
import partner6 from '../assets/images/partners/partner6.png';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Partners: React.FC = () => {
  const partners = [
    { name: "Kenya Bureau of Statistics", image: partner1 },
    { name: "Uganda Bureau of Statistics", image: partner2 },
    { name: "Tanzania National Bureau of Statistics", image: partner3 },
    { name: "Rwanda National Institute of Statistics", image: partner4 },
    { name: "African Development Bank", image: partner5 },
    { name: "World Bank", image: partner6 }
  ];

  return (
    <section className={`${styles.sections.padding} py-24 ${styles.sections.gray}`}>
      <div className={styles.sections.container}>
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className={`${styles.typography.h2} mb-4`}>Our Partners</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Working together with leading statistical organizations across East Africa
          </p>
        </motion.div>
        <div className={styles.grids.responsive2to3to6}>
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Paper
                elevation={0}
                className={`p-6 flex items-center justify-center border border-gray-100 hover:border-[${styles.colors.primary}] transition-colors duration-300 rounded-lg`}
              >
                <motion.img
                  src={partner.image}
                  alt={partner.name}
                  className={styles.images.logo}
                  whileHover={{ 
                    scale: 1.1,
                    filter: "grayscale(0%)",
                    transition: { duration: 0.3 }
                  }}
                  initial={{ filter: "grayscale(100%)" }}
                />
              </Paper>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 
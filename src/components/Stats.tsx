import { Paper } from '@mui/material';
import { ChartBarIcon, UserGroupIcon, AcademicCapIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import styles from '../utils/styles';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Stats = () => {
  const stats = [
    {
      number: "15+",
      label: "Years Experience",
      icon: <BuildingOfficeIcon className={`h-8 w-8 text-[${styles.colors.primary}]`} />
    },
    {
      number: "1000+",
      label: "Trained Professionals",
      icon: <UserGroupIcon className={`h-8 w-8 text-[${styles.colors.primary}]`} />
    },
    {
      number: "50+",
      label: "Research Projects",
      icon: <ChartBarIcon className={`h-8 w-8 text-[${styles.colors.primary}]`} />
    },
    {
      number: "100+",
      label: "Training Programs",
      icon: <AcademicCapIcon className={`h-8 w-8 text-[${styles.colors.primary}]`} />
    }
  ];

  return (
    <section className={`${styles.sections.padding} py-24 ${styles.sections.light} bg-[#f9f9f9]`}>
      <div className={styles.sections.container}>
        <motion.h2 
          className={`${styles.typography.h2} text-center mb-16`}
          variants={fadeInUp}
        >
          Our Impact
        </motion.h2>
        <div className={styles.grids.responsive1to2to4}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Paper elevation={0} className="p-8 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.8 }
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className={`text-4xl font-bold text-[${styles.colors.primary}] mb-3`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </Paper>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 
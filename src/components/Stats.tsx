'use client';

import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Stats: React.FC = () => {
  const stats = [
    {
      number: '15+',
      label: 'Years of Experience',
      description: 'Providing statistical excellence since 2008'
    },
    {
      number: '1000+',
      label: 'Trained Professionals',
      description: 'Statisticians and researchers across East Africa'
    },
    {
      number: '50+',
      label: 'Research Projects',
      description: 'Completed studies and consultancy projects'
    },
    {
      number: '100+',
      label: 'Training Programs',
      description: 'Delivered across the region'
    }
  ];

  return (
    <section className="py-24 bg-easi-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className={`${typography.h2} mb-4`}>Our Impact by Numbers</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Measuring our commitment to statistical excellence and capacity building across East Africa
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-easi-orange-light mb-2">
                  {stat.number}
                </div>
                <h3 className={`${typography.h4} mb-3`}>{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            These numbers represent our commitment to advancing statistical capacity and research excellence 
            across East Africa. Join us in building a data-driven future for the region.
          </p>
          <motion.a
            href="/about"
            className="inline-block bg-easi-orange/20 text-easi-orange border border-easi-orange hover:bg-easi-orange/30 px-8 py-3 rounded-md font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

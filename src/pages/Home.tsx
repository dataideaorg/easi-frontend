import { Button } from '@mui/material';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import heroImage from '../assets/images/statistics-hero.jpg';
import styles from '../utils/styles';
import { motion } from 'framer-motion';

// Animation variants for consistent animations
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

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Background" 
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
        
        <div className={`${styles.sections.container} relative z-10`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0 text-white"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className={`${styles.typography.h1} mb-8`}
                variants={fadeInUp}
              >
                Excellence in Statistical <span className="text-white">Research & Training</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-10 text-white/90"
                variants={fadeInUp}
              >
                The East African Statistics Institute (EASI) provides comprehensive research in statistical methodology and high-quality training to enhance the quality of national statistics.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-6"
                variants={fadeInUp}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="/training"
                  sx={{ 
                    backgroundColor: 'white', 
                    color: '#dd8604',
                    '&:hover': { backgroundColor: '#f8f8f8' },
                    px: 4,
                    py: 1.5
                  }}
                >
                  Our Programs
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="/about"
                  sx={{ 
                    borderColor: 'white', 
                    color: 'white',
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      borderColor: 'white' 
                    },
                    px: 4,
                    py: 1.5
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-white/30"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-white/30"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                ></motion.div>
                
                {/* Card with stats */}
                <motion.div 
                  className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-md"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8">
                    <h3 className={`${styles.typography.h3} text-[${styles.colors.dark}] mb-6`}>
                      Our Impact
                    </h3>
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`text-[${styles.colors.primary}] text-4xl font-bold mr-4`}>15+</div>
                        <div className="text-gray-600">Years of Experience</div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`text-[${styles.colors.primary}] text-4xl font-bold mr-4`}>1000+</div>
                        <div className="text-gray-600">Trained Professionals</div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`text-[${styles.colors.primary}] text-4xl font-bold mr-4`}>50+</div>
                        <div className="text-gray-600">Research Projects</div>
                      </motion.div>
                    </div>
                  </div>
                  <div className={`bg-[${styles.colors.primary}] p-4 text-center text-white`}>
                    <Button
                      variant="text"
                      href="/about"
                      sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                    >
                      Discover Our Story →
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <Services />
      </motion.div>

      {/* Stats Section with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <Stats />
      </motion.div>

      {/* Partners Section with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <Partners />
      </motion.div>

      {/* CTA Section */}
      <section className={`${styles.sections.dark} py-24`}>
        <div className={styles.sections.container}>
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className={`${styles.typography.h2} mb-6`}
              variants={fadeInUp}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Join leading organizations across East Africa in advancing statistical excellence through our programs and services.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                variant="contained"
                size="large"
                sx={{ 
                  px: 6, 
                  py: 1.5, 
                  fontSize: '1.1rem',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 25px rgba(221, 134, 4, 0.4)'
                  },
                  transition: 'all 0.3s'
                }}
              >
                Contact Us Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
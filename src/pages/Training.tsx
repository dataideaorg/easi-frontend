import React from 'react';
import { Card, CardContent, Button, Chip } from '@mui/material';
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  ClipboardDocumentCheckIcon,
  CalendarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import trainingImage from '../assets/images/training-session.jpg';
import styles from '../utils/styles';
import { motion } from 'framer-motion';

const Training: React.FC = () => {
  const trainingCategories = [
    {
      title: "R Programming for Statistical Analysis",
      description: "Comprehensive training in R programming language for statistical analysis, data visualization, and reporting.",
      icon: <CodeBracketIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />,
      courses: [
        {
          title: "Introduction to R for Statisticians",
          duration: "3 days",
          level: "Beginner",
          description: "Learn the fundamentals of R programming for statistical analysis, including data manipulation, visualization, and basic statistical tests."
        },
        {
          title: "Advanced Statistical Modeling with R",
          duration: "5 days",
          level: "Advanced",
          description: "Master advanced statistical techniques using R, including regression analysis, time series forecasting, and multivariate analysis."
        },
        {
          title: "Data Visualization with R",
          duration: "2 days",
          level: "Intermediate",
          description: "Create compelling visualizations using ggplot2 and other R packages to effectively communicate statistical findings."
        }
      ]
    },
    {
      title: "Python for Data Science",
      description: "Hands-on training in Python programming for data analysis, machine learning, and statistical applications.",
      icon: <ChartBarIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />,
      courses: [
        {
          title: "Python Fundamentals for Data Analysis",
          duration: "4 days",
          level: "Beginner",
          description: "Learn Python basics, data manipulation with pandas, and visualization with matplotlib and seaborn."
        },
        {
          title: "Machine Learning with Python",
          duration: "5 days",
          level: "Intermediate",
          description: "Implement machine learning algorithms using scikit-learn and understand their statistical foundations."
        },
        {
          title: "Statistical Analysis with Python",
          duration: "3 days",
          level: "Intermediate",
          description: "Perform statistical analysis using Python's statsmodels and scipy packages for hypothesis testing and modeling."
        }
      ]
    },
    {
      title: "Monitoring and Evaluation",
      description: "Comprehensive training in designing, implementing, and managing effective M&E systems for programs and projects.",
      icon: <ClipboardDocumentCheckIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />,
      courses: [
        {
          title: "M&E Fundamentals",
          duration: "3 days",
          level: "Beginner",
          description: "Learn the core concepts, frameworks, and tools for effective monitoring and evaluation of development programs."
        },
        {
          title: "Results-Based M&E Systems",
          duration: "4 days",
          level: "Intermediate",
          description: "Design and implement results-based M&E systems that track outcomes and impact, not just activities and outputs."
        },
        {
          title: "Data Collection and Analysis for M&E",
          duration: "3 days",
          level: "Intermediate",
          description: "Master various data collection methods and analytical techniques specifically for monitoring and evaluation purposes."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={trainingImage} 
            alt="Training Session" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#dd8604]/90 to-[#333333]/90"></div>
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
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className={`${styles.typography.h1} mb-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Training <span className="text-white">Programs</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                EASI offers comprehensive training programs in statistical analysis, research methodology, and data science to enhance the capacity of professionals across East Africa.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  className={`${styles.buttons.white} ${styles.buttons.medium}`}
                >
                  View Schedule
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className="border-white text-white hover:bg-white/20 hover:border-white"
                >
                  Request Custom Training
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className={`${styles.typography.h3} text-[${styles.colors.dark}] mb-4`}>Upcoming Training</h3>
                <div className="space-y-4">
                  {[
                    {
                        title: "Introduction to AI",
                      date: "March 14-17, 2025",
                      location: "Kampala, Uganda",
                      link: "https://www.meet.easi.ac.ug/meeting?roomID=20250314",
                    },
                  ].map((event, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center p-3 border-l-4 border-[#dd8604] bg-gray-50"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mr-4">
                        <CalendarIcon className={`h-8 w-8 text-[${styles.colors.primary}]`} />
                      </div>
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <div className="text-sm text-gray-600 flex flex-wrap gap-x-4">
                          <span>{event.date}</span>
                          <span>{event.location}</span>
                          <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-[${styles.colors.primary}]">Join event</a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* <div className="mt-4 text-center">
                  <Button
                    variant="text"
                    className={`text-[${styles.colors.primary}]`}
                  >
                    View All Upcoming Trainings →
                  </Button>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className={`${styles.sections.padding} ${styles.sections.gray}`}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Our Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training solutions designed to enhance statistical capacity and data analysis skills
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {trainingCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <div className="flex flex-col md:flex-row md:items-center mb-6">
                    <div className={`p-4 rounded-full bg-[${styles.colors.primary}]/10 mr-6 mb-4 md:mb-0`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`${styles.typography.h3} mb-2`}>{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {category.courses.map((course, courseIndex) => (
                      <motion.div
                        key={courseIndex}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className={styles.cards.base}>
                          <CardContent className={styles.cards.content}>
                            <h4 className="text-lg font-semibold mb-3">{course.title}</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Chip 
                                icon={<ClockIcon className="h-4 w-4" />} 
                                label={course.duration} 
                                size="small" 
                                className="bg-gray-100"
                              />
                              <Chip 
                                label={course.level} 
                                size="small" 
                                className={`bg-[${styles.colors.primary}]/10 text-[${styles.colors.primary}]`}
                              />
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                            <Button 
                              variant="outlined" 
                              size="small" 
                              className={styles.buttons.secondary}
                            >
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.sections.padding}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>What Our Trainees Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who have participated in our training programs
            </p>
          </motion.div>
          
          <div className={styles.grids.responsive1to2to3}>
            {[
              {
                quote: "The R programming training was excellent. The instructors were knowledgeable and the hands-on exercises helped me apply what I learned immediately in my work.",
                author: "John Mukasa",
                organization: "Uganda Bureau of Statistics"
              },
              {
                quote: "EASI's M&E training transformed how our organization approaches program evaluation. The practical tools and frameworks have been invaluable.",
                author: "Sarah Nyambura",
                organization: "Kenya National Bureau of Statistics"
              },
              {
                quote: "The Python for Data Science course was comprehensive and well-structured. I now feel confident analyzing large datasets and creating insightful visualizations.",
                author: "Emmanuel Rwema",
                organization: "Rwanda National Institute of Statistics"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border border-gray-100">
                  <CardContent className={styles.cards.content}>
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className={`${styles.typography.small} text-gray-500`}>{testimonial.organization}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.sections.dark}>
        <div className={styles.sections.container}>
          <div className="text-center">
            <motion.h2 
              className={`${styles.typography.h2} mb-6 pt-12`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Enhance Your Team's Skills?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to discuss your training needs and how we can design a 
              customized program for your organization.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                variant="contained"
                size="large"
                className={`${styles.buttons.primary} ${styles.buttons.large}`}
              >
                Request Training
              </Button>
              <Button
                variant="outlined"
                size="large"
                className={`border-white text-white hover:bg-white/20 hover:border-white ${styles.buttons.large}`}
              >
                Download Brochure
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;

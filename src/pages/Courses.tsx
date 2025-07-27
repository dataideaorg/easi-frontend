import React from 'react';
import { Card, CardContent, Button, Chip } from '@mui/material';
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  AcademicCapIcon,
  GlobeAltIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import styles from '../utils/styles';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/statistics-hero.jpg';

const Courses: React.FC = () => {
  const courseCategories = [
    {
      title: "Data Science & Analytics",
      description: "Master the tools and techniques for data analysis, visualization, and machine learning.",
      icon: <ChartBarIcon className="h-12 w-12 text-[#dd8604]" />,
      courses: [
        {
          title: "Python for Data Science",
          description: "Comprehensive course covering Python fundamentals, data manipulation, visualization, and machine learning.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          price: "Free",
          external: true,
          link: "https://python.easi.ac.ug",
          features: ["Python Basics", "Pandas & NumPy", "Data Visualization", "Machine Learning", "Real-world Projects"]
        },
        {
          title: "R Programming for Statistics",
          description: "Learn statistical analysis and data visualization using R programming language.",
          duration: "6 weeks",
          level: "Beginner",
          price: "$299",
          external: false,
          features: ["R Fundamentals", "Statistical Analysis", "Data Visualization", "Reporting"]
        },
        {
          title: "Advanced Machine Learning",
          description: "Deep dive into machine learning algorithms and their practical applications.",
          duration: "10 weeks",
          level: "Advanced",
          price: "$499",
          external: false,
          features: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Model Deployment"]
        }
      ]
    },
    {
      title: "Statistical Analysis",
      description: "Develop strong statistical foundations for research and data analysis.",
      icon: <AcademicCapIcon className="h-12 w-12 text-[#dd8604]" />,
      courses: [
        {
          title: "Statistical Methods",
          description: "Comprehensive introduction to statistical methods and their applications.",
          duration: "6 weeks",
          level: "Beginner",
          price: "$249",
          external: false,
          features: ["Descriptive Statistics", "Inferential Statistics", "Hypothesis Testing", "Regression Analysis"]
        },
        {
          title: "Research Methodology",
          description: "Learn research design, data collection, and analysis methodologies.",
          duration: "8 weeks",
          level: "Intermediate",
          price: "$349",
          external: false,
          features: ["Research Design", "Survey Methods", "Qualitative Analysis", "Report Writing"]
        }
      ]
    },
    {
      title: "Professional Development",
      description: "Enhance your professional skills in monitoring, evaluation, and project management.",
      icon: <UserGroupIcon className="h-12 w-12 text-[#dd8604]" />,
      courses: [
        {
          title: "Monitoring & Evaluation",
          description: "Master M&E frameworks and tools for effective program management.",
          duration: "6 weeks",
          level: "Intermediate",
          price: "$399",
          external: false,
          features: ["M&E Frameworks", "Data Collection", "Impact Assessment", "Reporting"]
        },
        {
          title: "Project Management",
          description: "Learn project management methodologies and tools for successful project delivery.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          price: "$449",
          external: false,
          features: ["Project Planning", "Risk Management", "Stakeholder Management", "Agile Methods"]
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
            src={heroImage} 
            alt="Statistics Hero" 
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
          <div className="text-center text-white max-w-4xl mx-auto">
            <motion.h1 
              className={`${styles.typography.h1} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Professional <span className="text-white">Courses</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Enhance your skills with our comprehensive online and in-person courses designed for professionals, researchers, and students across East Africa.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                variant="contained"
                size="large"
                className="bg-white text-[#dd8604] hover:bg-gray-100 px-8 py-3"
                href="#courses"
              >
                Explore Courses
              </Button>
              <Button
                variant="outlined"
                size="large"
                className="border-white text-white hover:bg-white/20 hover:border-white px-8 py-3"
                href="/#/contact"
              >
                Get Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="courses" className={`${styles.sections.padding} ${styles.sections.gray}`}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Our Course Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of courses designed to meet the needs of professionals, researchers, and students at all levels.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {courseCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                  <div className="flex flex-col md:flex-row md:items-center mb-8">
                    <div className="p-4 rounded-full bg-[#dd8604]/10 mr-6 mb-4 md:mb-0">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`${styles.typography.h3} mb-2`}>{category.title}</h3>
                      <p className="text-gray-600 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.courses.map((course, courseIndex) => (
                      <motion.div
                        key={courseIndex}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className={`${styles.cards.base} h-full`}>
                          <CardContent className={`${styles.cards.content} h-full flex flex-col`}>
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="text-lg font-semibold text-[#dd8604]">{course.title}</h4>
                              {course.external && (
                                <Chip 
                                  label="External" 
                                  size="small" 
                                  className="bg-green-100 text-green-800"
                                />
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
                            
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
                                className="bg-[#dd8604]/10 text-[#dd8604]"
                              />
                              <Chip 
                                label={course.price} 
                                size="small" 
                                className="bg-blue-100 text-blue-800"
                              />
                            </div>
                            
                            <div className="mb-4">
                              <h5 className="font-semibold text-sm mb-2">What you'll learn:</h5>
                              <ul className="text-xs text-gray-600 space-y-1">
                                {course.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-[#dd8604] rounded-full mr-2"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {course.external ? (
                              <a 
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                              >
                                <Button 
                                  variant="contained"
                                  size="small" 
                                  className="bg-[#dd8604] text-white hover:bg-[#c77804]"
                                >
                                  Visit Course
                                </Button>
                              </a>
                            ) : (
                              <a 
                                href="/#/contact"
                                className="inline-block"
                              >
                                <Button 
                                  variant="outlined"
                                  size="small" 
                                  className={styles.buttons.secondary}
                                >
                                  Enroll Now
                                </Button>
                              </a>
                            )}
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

      {/* Why Choose Our Courses */}
      <section className={styles.sections.padding}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Why Choose Our Courses?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of learning with EASI's professional training programs
            </p>
          </motion.div>
          
          <div className={styles.grids.responsive1to2to3}>
            {[
              {
                icon: <AcademicCapIcon className="h-8 w-8" />,
                title: "Expert Instructors",
                description: "Learn from experienced professionals and researchers in the field of statistics and data science."
              },
              {
                icon: <GlobeAltIcon className="h-8 w-8" />,
                title: "Flexible Learning",
                description: "Choose between online and in-person courses to fit your schedule and learning preferences."
              },
              {
                icon: <CodeBracketIcon className="h-8 w-8" />,
                title: "Practical Skills",
                description: "Gain hands-on experience with real-world projects and case studies from East Africa."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Community Support",
                description: "Join a network of professionals and researchers across East Africa for collaboration and support."
              },
              {
                icon: <ChartBarIcon className="h-8 w-8" />,
                title: "Industry-Relevant",
                description: "Course content is designed to address the specific needs and challenges of the East African context."
              },
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "Lifetime Access",
                description: "Access course materials and updates even after completion to support your ongoing learning."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className={styles.cards.content}>
                    <div className={`p-3 rounded-full bg-[${styles.colors.primary}]/10 w-fit mx-auto mb-4`}>
                      <div className="text-[#dd8604]">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
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
              Ready to Start Your Learning Journey?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose from our comprehensive course offerings and take the first step towards enhancing your professional skills.
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
                href="#courses"
              >
                Browse All Courses
              </Button>
              <Button
                variant="outlined"
                size="large"
                className={`border-white text-white hover:bg-white/20 hover:border-white ${styles.buttons.large}`}
                href="/#/contact"
              >
                Get Course Advice
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses; 
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ClockIcon, 
  BookOpenIcon,
  StarIcon,
  CheckCircleIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

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

export default function Courses() {
  const courses = [
    {
      title: 'Data Management with Python',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.9,
      students: 200,
      description: 'Learn essential Python skills for data management, cleaning, and basic analysis.',
      topics: [
        'Python Fundamentals',
        'Data Structures and Pandas',
        'Data Cleaning and Preprocessing',
        'File I/O and Data Formats',
        'Basic Data Visualization'
      ],
      schedule: 'Tuesdays & Thursdays, 6:00 PM - 8:00 PM',
      price: 'Contact for pricing',
      image: '/images/data-management-with-python.jpg'
    },
    {
      title: 'Introduction to Statistics',
      duration: '8 weeks',
      level: 'Beginner',
      rating: 4.8,
      students: 150,
      description: 'A comprehensive introduction to statistical concepts and methods for beginners.',
      topics: [
        'Basic Statistical Concepts',
        'Data Collection and Organization',
        'Descriptive Statistics',
        'Introduction to Probability',
        'Basic Hypothesis Testing'
      ],
      schedule: 'Mondays & Wednesdays, 2:00 PM - 4:00 PM',
      price: 'Contact for pricing',
      image: '/images/training-session.jpg'
    },
    {
      title: 'Advanced Statistical Methods',
      duration: '12 weeks',
      level: 'Advanced',
      rating: 4.9,
      students: 85,
      description: 'Advanced statistical techniques for experienced practitioners and researchers.',
      topics: [
        'Multivariate Analysis',
        'Advanced Regression Techniques',
        'Time Series Analysis',
        'Bayesian Statistics',
        'Machine Learning Basics'
      ],
      schedule: 'Tuesdays & Thursdays, 10:00 AM - 12:00 PM',
      price: 'Contact for pricing',
      image: '/images/consultancy.jpg'
    },
    {
      title: 'Data Analysis with R',
      duration: '6 weeks',
      level: 'Intermediate',
      rating: 4.7,
      students: 120,
      description: 'Hands-on course on data analysis and visualization using R programming language.',
      topics: [
        'R Programming Fundamentals',
        'Data Manipulation with dplyr',
        'Data Visualization with ggplot2',
        'Statistical Analysis in R',
        'Reproducible Research'
      ],
      schedule: 'Saturdays, 9:00 AM - 1:00 PM',
      price: 'Contact for pricing',
      image: '/images/team-meeting.jpg'
    },
    {
      title: 'Survey Methodology',
      duration: '10 weeks',
      level: 'Intermediate',
      rating: 4.6,
      students: 95,
      description: 'Comprehensive course on survey design, implementation, and analysis.',
      topics: [
        'Survey Design Principles',
        'Sampling Techniques',
        'Questionnaire Development',
        'Data Collection Methods',
        'Survey Data Analysis'
      ],
      schedule: 'Wednesdays & Fridays, 3:00 PM - 5:00 PM',
      price: 'Contact for pricing',
      image: '/images/appreciation.jpg'
    }
  ];

  const features = [
    {
      icon: <AcademicCapIcon className="h-8 w-8 text-easi-orange" />,
      title: 'Expert Instructors',
      description: 'Learn from experienced statisticians and researchers'
    },
    {
      icon: <BookOpenIcon className="h-8 w-8 text-easi-orange" />,
      title: 'Comprehensive Materials',
      description: 'Access to course materials and resources'
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8 text-easi-orange" />,
      title: 'Certification',
      description: 'Receive certificates upon successful completion'
    },
    {
      icon: <CalendarIcon className="h-8 w-8 text-easi-orange" />,
      title: 'Flexible Schedule',
      description: 'Multiple class times to fit your schedule'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/statistics-hero.jpg"
            alt="Statistics courses" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex items-end justify-center pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center text-white"
          >
            <motion.h1 
              className={`${typography.h1} mb-8`}
              variants={fadeInUp}
            >
              Statistics Courses
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Advance your statistical knowledge with our comprehensive course offerings. 
              From beginner to advanced levels, we have courses designed to meet your learning needs.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30 px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Enroll Today
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className={`${typography.h2} mb-6`}
              variants={fadeInUp}
            >
              Available Courses
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Choose from our range of statistics courses designed for different skill levels and professional needs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-32 relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {course.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {course.students} students
                      </div>
                    </div>
                    
                    <h3 className={`${typography.h4} mb-4 text-easi-orange`}>
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {course.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Course Topics:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {course.topics.slice(0, 3).map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2">
                            <CheckCircleIcon className="h-3 w-3 text-easi-orange flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                        {course.topics.length > 3 && (
                          <li className="text-easi-orange text-xs">
                            +{course.topics.length - 3} more topics
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <ClockIcon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium">Schedule</span>
                      </div>
                      <p className="text-sm text-gray-600">{course.schedule}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-easi-orange">
                        {course.price}
                      </span>
                      <Button
                        asChild
                        variant="outline"
                        className="bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30"
                      >
                        <Link href="/contact">
                          Enroll Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className={`${typography.h2} mb-6`}
              variants={fadeInUp}
            >
              Why Choose Our Courses?
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Our courses are designed to provide practical, hands-on learning experiences 
              that prepare you for real-world statistical challenges.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {feature.icon}
                </div>
                <h3 className={`${typography.h4} mb-3`}>{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-easi-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              className={`${typography.h2} mb-6`}
              variants={fadeInUp}
            >
              Start Your Learning Journey
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto text-gray-300"
              variants={fadeInUp}
            >
              Join hundreds of professionals who have advanced their statistical skills 
              through our comprehensive course offerings.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30 px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Enroll Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/20 text-white border-white hover:bg-white/30 px-8 py-3 text-lg"
              >
                <Link href="/training">
                  View Training Programs
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

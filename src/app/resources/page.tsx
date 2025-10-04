'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  BookOpenIcon, 
  VideoCameraIcon,
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  AcademicCapIcon
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

export default function Resources() {
  const resourceCategories = [
    {
      icon: <DocumentTextIcon className="h-12 w-12 text-easi-orange" />,
      title: 'Research Papers',
      description: 'Access our collection of published research papers and statistical studies.',
      count: '25+ Papers',
      link: '#research-papers'
    },
    {
      icon: <BookOpenIcon className="h-12 w-12 text-easi-orange" />,
      title: 'Training Materials',
      description: 'Downloadable training materials, guides, and reference documents.',
      count: '50+ Resources',
      link: '#training-materials'
    },
    {
      icon: <VideoCameraIcon className="h-12 w-12 text-easi-orange" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video tutorials on statistical methods and software.',
      count: '30+ Videos',
      link: '#video-tutorials'
    },
    {
      icon: <AcademicCapIcon className="h-12 w-12 text-easi-orange" />,
      title: 'Case Studies',
      description: 'Real-world case studies demonstrating statistical applications.',
      count: '15+ Cases',
      link: '#case-studies'
    }
  ];

  const featuredResources = [
    {
      type: 'Research Paper',
      title: 'Statistical Capacity Building in East Africa: Challenges and Opportunities',
      description: 'A comprehensive analysis of statistical capacity across East African countries.',
      downloadLink: '#',
      date: '2024'
    },
    {
      type: 'Training Guide',
      title: 'Introduction to Survey Sampling Methods',
      description: 'Complete guide to sampling techniques for survey research.',
      downloadLink: '#',
      date: '2024'
    },
    {
      type: 'Case Study',
      title: 'Population Census Data Analysis: Uganda Case Study',
      description: 'Detailed analysis of census data collection and processing methods.',
      downloadLink: '#',
      date: '2023'
    },
    {
      type: 'Video Tutorial',
      title: 'Data Analysis with R Programming',
      description: 'Complete video series on statistical analysis using R.',
      downloadLink: 'https://youtube.com/@easiacug',
      date: '2024'
    }
  ];

  const externalLinks = [
    {
      title: 'Uganda Bureau of Statistics',
      description: 'National statistical office of Uganda',
      url: 'https://www.ubos.org',
      category: 'Government'
    },
    {
      title: 'East African Community',
      description: 'Regional statistical harmonization initiatives',
      url: 'https://www.eac.int',
      category: 'Regional'
    },
    {
      title: 'African Development Bank Statistics',
      description: 'Statistical data and resources for Africa',
      url: 'https://www.afdb.org',
      category: 'International'
    },
    {
      title: 'UN Statistics Division',
      description: 'Global statistical standards and methodologies',
      url: 'https://unstats.un.org',
      category: 'International'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/statistics-hero.jpg"
            alt="Statistical resources and research" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
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
              Resources
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Access our comprehensive collection of statistical resources, research papers, 
              training materials, and educational content to support your statistical journey.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                asChild
                className="bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover px-8 py-3 text-lg"
              >
                <Link href="#resource-categories">
                  Explore Resources
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="resource-categories" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className={`${typography.h2} mb-6 text-easi-orange`}
              variants={fadeInUp}
            >
              Resource Categories
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Explore our organized collection of resources designed to support statistical 
              learning and professional development.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      {category.icon}
                    </div>
                    <h3 className={`${typography.h4} mb-4`}>{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="text-easi-orange font-semibold mb-4">{category.count}</div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/20 hover:border-easi-orange-hover bg-easi-orange/10"
                    >
                      <Link href={category.link}>
                        Explore
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-easi-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className={`${typography.h2} mb-6 text-white`}
              variants={fadeInUp}
            >
              Featured Resources
            </motion.h2>
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Discover our most popular and recently published resources.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-easi-orange text-white text-xs rounded-full">
                        {resource.type}
                      </span>
                      <span className="text-sm text-gray-300">{resource.date}</span>
                    </div>
                    <h3 className={`${typography.h4} mb-3 text-easi-orange`}>
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{resource.description}</p>
                    <Button
                      asChild
                      className="bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover"
                    >
                      {resource.downloadLink.startsWith('http') ? (
                        <a href={resource.downloadLink} target="_blank" rel="noopener noreferrer">
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                          View Resource
                        </a>
                      ) : (
                        <Link href={resource.downloadLink}>
                          <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                          Download
                        </Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
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
              className={`${typography.h2} mb-6 text-easi-orange`}
              variants={fadeInUp}
            >
              Useful External Links
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Access additional statistical resources and data from our partner organizations.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`${typography.h4} text-easi-orange`}>
                        {link.title}
                      </h3>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {link.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/20 hover:border-easi-orange-hover bg-easi-orange/10"
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                        Visit Site
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay Updated
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto text-gray-300"
              variants={fadeInUp}
            >
              Subscribe to our newsletter to get notified about new resources, 
              research publications, and training opportunities.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-easi-orange"
                />
                <Button
                  className="bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover px-6"
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

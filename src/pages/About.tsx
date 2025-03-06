import { Card, CardContent, Button } from '@mui/material';
import { AcademicCapIcon, UserIcon, BuildingLibraryIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import teamImage from '../assets/images/team-meeting.jpg';
import fabian from '../assets/images/fabian.jpg';
import ronald from '../assets/images/ronald.jpg';
import abraham from '../assets/images/abraham.jpg';
import styles from '../utils/styles';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Fabian Nabugoomu",
      title: "Chairman, Board of Directors",
      image: fabian,
      shortBio: "Associate Professor of Statistics and Applied Computing. Currently the Deputy Vice-Chancellor of Kyambogo University responsible for Finance and Administration.",
      education: "PhD in Statistics (1994) from the University of Edinburgh, Scotland",
      icon: <AcademicCapIcon className={`h-6 w-6 text-[${styles.colors.primary}]`} />
    },
    {
      name: "Prof. Ronald Wesonga",
      title: "Founding Director",
      image: ronald,
      shortBio: "Statistician based at the Department of Statistics, Sultan Qaboos University. Formerly a visiting Professor at the Institute of Social Research, Makerere University.",
      education: "Studied at the Institute of Statistics and Applied Economics, Makerere University",
      icon: <UserIcon className={`h-6 w-6 text-[${styles.colors.primary}]`} />
    },
    {
      name: "Dr. Abraham Owino Yeyo",
      title: "Director",
      image: abraham,
      shortBio: "Statistician involved in capacity building in Research, Monitoring and Evaluation and Community Development, currently lecturing at Makerere University.",
      education: "Lecturer at Makerere University School of Statistics and Planning",
      icon: <BuildingLibraryIcon className={`h-6 w-6 text-[${styles.colors.primary}]`} />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={teamImage} 
            alt="Team Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/90 to-[#dd8604]/80"></div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#dd8604]/20 blur-3xl"
            animate={{ 
              x: [0, 50, 0],
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
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
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
              About <span className="text-white">EASI</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The East African Statistics Institute (EASI) was established to provide primarily a complementary role of research in appropriate statistical and computational methodology that facilitate production and sustenance of quality national statistics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.sections.padding}>
        <div className={styles.sections.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#dd8604] h-full">
                <h2 className={`${styles.typography.h3} mb-4 text-[${styles.colors.dark}]`}>Our Mission</h2>
                <p className="text-gray-600">
                  To provide high-quality research in statistical methodology and computational techniques that enhance the production and sustainability of quality national statistics across East Africa.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#dd8604] h-full">
                <h2 className={`${styles.typography.h3} mb-4 text-[${styles.colors.dark}]`}>Our Vision</h2>
                <p className="text-gray-600">
                  To be the leading center of excellence in statistical research, methodology development, and capacity building in East Africa and beyond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`${styles.sections.padding} ${styles.sections.gray}`}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team consists of experienced statisticians and researchers dedicated to advancing statistical excellence across East Africa.
            </p>
          </motion.div>
          
          <div className={styles.grids.responsive1to2to3}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={styles.cards.base}>
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className={`${styles.cards.imageContainer} relative`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className={styles.images.profile}
                      />
                      <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                        {member.icon}
                      </div>
                    </div>
                    <div className={`${styles.cards.content} flex-grow`}>
                      <h3 className={`${styles.typography.h4} mb-1`}>{member.name}</h3>
                      <p className={`text-[${styles.colors.primary}] font-medium mb-4`}>{member.title}</p>
                      <p className="text-gray-600 mb-4">{member.shortBio}</p>
                      <div className="flex items-center mb-4">
                        <AcademicCapIcon className="h-5 w-5 text-gray-500 mr-2" />
                        <p className="text-sm text-gray-500">{member.education}</p>
                      </div>
                      <Button 
                        variant="outlined" 
                        className={`mt-2 ${styles.buttons.secondary}`}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.sections.padding}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our work and relationships with partners and clients.
            </p>
          </motion.div>
          
          <div className={styles.grids.responsive1to2to4}>
            {[
              {
                title: "Excellence",
                description: "We are committed to the highest standards of statistical methodology and research.",
                icon: <AcademicCapIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />
              },
              {
                title: "Innovation",
                description: "We continuously seek new approaches to solve complex statistical challenges.",
                icon: <ChartBarIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />
              },
              {
                title: "Integrity",
                description: "We uphold ethical standards and transparency in all our work and relationships.",
                icon: <UserIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />
              },
              {
                title: "Collaboration",
                description: "We believe in the power of partnerships to achieve greater impact across the region.",
                icon: <BuildingLibraryIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={styles.cards.base}>
                  <CardContent className={styles.cards.content}>
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className={`${styles.typography.h4} mb-2 text-center`}>{value.title}</h3>
                    <p className="text-gray-600 text-center">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`mt-6 ${styles.sections.dark}`}>
        <div className={styles.sections.container}>
          <div className="text-center pt-12">
            <motion.h2 
              className={`${styles.typography.h2} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Join Us in Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Partner with EASI to advance statistical excellence and contribute to evidence-based decision making across East Africa.
            </motion.p>
            <motion.div
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
                Contact Us Today
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
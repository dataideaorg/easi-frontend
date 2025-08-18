import React from 'react';
import { Card, CardContent } from '@mui/material';
import styles from '../utils/styles';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/statistics-hero.jpg';
import { 
  DocumentTextIcon, 
  CreditCardIcon, 
  CameraIcon, 
  ShieldCheckIcon, 
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Terms and Conditions" 
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
              Terms and Conditions
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              EASI Short Courses Registration and Participation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className={`${styles.sections.padding} ${styles.sections.gray}`}>
        <div className={styles.sections.container}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Introduction */}
              <Card className="bg-white shadow-lg mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-[#dd8604]/10 mr-4">
                      <DocumentTextIcon className="h-8 w-8 text-[#dd8604]" />
                    </div>
                    <div>
                      <h2 className={`${styles.typography.h3} text-[${styles.colors.primary}]`}>
                        Course Access
                      </h2>
                      <p className="text-gray-600">Registration and participation terms</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Upon payment of registration fees, participants have access to the short course organised by the East African Statistical Institute (EASI).
                  </p>
                </CardContent>
              </Card>

              {/* Registration and Payment */}
              <Card className="bg-white shadow-lg mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-[#dd8604]/10 mr-4">
                      <CreditCardIcon className="h-8 w-8 text-[#dd8604]" />
                    </div>
                    <div>
                      <h2 className={`${styles.typography.h3} text-[${styles.colors.primary}]`}>
                        Registration and Payment
                      </h2>
                      <p className="text-gray-600">Payment methods and confirmation process</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 mb-2">Payment Methods</h4>
                      <ul className="text-blue-700 space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Bank transfer to East African Statistics Institute (EASI) bank account at the Eco Bank Forest Mall Branch</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Mobile Money: +256-791-429565 or +256-749747472</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Fees are in Ugandan currency</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 mb-2">Confirmation Process</h4>
                      <ul className="text-green-700 space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Email confirmation sent upon receiving full payment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Payment must be received at least one week before the course</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media and Publicity */}
              <Card className="bg-white shadow-lg mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-[#dd8604]/10 mr-4">
                      <CameraIcon className="h-8 w-8 text-[#dd8604]" />
                    </div>
                    <div>
                      <h2 className={`${styles.typography.h3} text-[${styles.colors.primary}]`}>
                        Media and Publicity
                      </h2>
                      <p className="text-gray-600">Photography, recording, and participant information</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <ul className="text-purple-700 space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>EASI may arrange for photographs, video recordings or live streaming during courses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>All photographs and recordings remain the property of EASI and may be used for promotional purposes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Participants consent to publication of their name and country in participant lists</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Insurance and Travel */}
              <Card className="bg-white shadow-lg mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-[#dd8604]/10 mr-4">
                      <ShieldCheckIcon className="h-8 w-8 text-[#dd8604]" />
                    </div>
                    <div>
                      <h2 className={`${styles.typography.h3} text-[${styles.colors.primary}]`}>
                        Insurance and Travel
                      </h2>
                      <p className="text-gray-600">Participant responsibilities for onsite training</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                    <p className="text-orange-700">
                      <strong>Important:</strong> Participants are responsible for obtaining and paying for travel insurance in case of onsite, face-to-face training.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Course Changes and Cancellations */}
              <Card className="bg-white shadow-lg mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-[#dd8604]/10 mr-4">
                      <ExclamationTriangleIcon className="h-8 w-8 text-[#dd8604]" />
                    </div>
                    <div>
                      <h2 className={`${styles.typography.h3} text-[${styles.colors.primary}]`}>
                        Course Changes and Cancellations
                      </h2>
                      <p className="text-gray-600">Policies for course modifications and refunds</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 mb-2">EASI Rights</h4>
                      <p className="text-red-700">
                        EASI reserves the right to make changes as deemed necessary, with or without prior notice to parties concerned.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-800 mb-2">Course Cancellation</h4>
                      <p className="text-yellow-700">
                        If a course is cancelled due to insufficient registrations, EASI will offer another course or provide a full refund.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                      <h4 className="font-semibold text-gray-800 mb-2">Participant Cancellation</h4>
                      <p className="text-gray-700">
                        For unavoidable cancellations due to special circumstances, participants must contact EASI for consideration of a partial refund minus administration fee. EASI's decision is final.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Note */}
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-yellow-100 mr-4">
                      <InformationCircleIcon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-800">Important Notice</h3>
                      <p className="text-yellow-700">These terms and conditions are subject to change. Please check this page regularly for updates.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;

'use client';

import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';

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

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-easi-orange to-easi-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              className={`${typography.h1} mb-8`}
              variants={fadeInUp}
            >
              Terms and Conditions
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Please read these terms and conditions carefully before using our services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto prose prose-lg"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> January 2024
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship 
                with the East African Statistics Institute (EASI) website and services operated by 
                the East African Statistics Institute.
              </p>
            </motion.div>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. Additionally, when using this website's particular 
                services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>2. Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on EASI's 
                website for personal, non-commercial transitory viewing only. This is the grant of 
                a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on EASI's website;</li>
                <li>remove any copyright or other proprietary notations from the materials.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This license shall automatically terminate if you violate any of these restrictions 
                and may be terminated by EASI at any time.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>3. Training and Educational Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EASI provides training programs, courses, and educational services. The following terms apply:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Registration is required for all training programs and courses.</li>
                <li>Payment terms and cancellation policies will be communicated during registration.</li>
                <li>Certificates are awarded upon successful completion of programs as defined by EASI.</li>
                <li>EASI reserves the right to modify program content, schedules, and instructors as necessary.</li>
                <li>Participants are expected to maintain professional conduct during all programs.</li>
              </ul>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>4. Consultancy Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For consultancy services, the following additional terms apply:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>All consultancy engagements require a separate written agreement.</li>
                <li>Confidentiality of client information is maintained in accordance with professional standards.</li>
                <li>Intellectual property rights in deliverables are governed by the specific consultancy agreement.</li>
                <li>Payment terms are specified in individual consultancy agreements.</li>
              </ul>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>5. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EASI is committed to protecting your privacy. We collect and use personal information 
                in accordance with our Privacy Policy. By using our services, you consent to the 
                collection and use of your information as described in our Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your personal information and 
                comply with applicable data protection regulations.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>6. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The materials on EASI's website are provided on an 'as is' basis. EASI makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or 
                other violation of rights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Further, EASI does not warrant or make any representations concerning the accuracy, 
                likely results, or reliability of the use of the materials on its website or otherwise 
                relating to such materials or on any sites linked to this site.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>7. Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall EASI or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising 
                out of the use or inability to use the materials on EASI's website, even if EASI or an 
                authorized representative has been notified orally or in writing of the possibility of 
                such damage. Because some jurisdictions do not allow limitations on implied warranties, 
                or limitations of liability for consequential or incidental damages, these limitations 
                may not apply to you.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>8. Accuracy of Materials</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on EASI's website could include technical, typographical, or 
                photographic errors. EASI does not warrant that any of the materials on its website 
                are accurate, complete, or current. EASI may make changes to the materials contained 
                on its website at any time without notice. However, EASI does not make any commitment 
                to update the materials.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>9. Links</h2>
              <p className="text-gray-700 leading-relaxed">
                EASI has not reviewed all of the sites linked to our website and is not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply 
                endorsement by EASI of the site. Use of any such linked website is at the user's own risk.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>10. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                EASI may revise these terms of service for its website at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of 
                these terms of service.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws 
                of Uganda and you irrevocably submit to the exclusive jurisdiction of the courts in 
                that State or location.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} className="mb-12">
              <h2 className={`${typography.h2} mb-6 text-easi-orange`}>12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>East African Statistics Institute (EASI)</strong></p>
                <p className="text-gray-700 mb-2">Email: info@easi.ac.ug</p>
                <p className="text-gray-700 mb-2">Phone: +256 414 542 803</p>
                <p className="text-gray-700">Address: Makerere University, Kampala, Uganda</p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import logo from '../assets/images/EASI-Logo.png';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';
import styles from '../utils/styles';
import { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.easi.ac.ug/contact/newsletter/', { email });
      console.log(response.data);
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };
  

  return (
    <footer className={`bg-[${styles.colors.dark}] text-white`}>
      {/* Main Footer */}
      <div className={`${styles.sections.container} py-12`}>
        <div className={styles.grids.responsive1to2to4}>
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="EASI Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className={`${styles.typography.small} mb-6`}>
              The East African Statistics Institute (EASI) provides comprehensive research 
              in statistical methodology and high-quality training to enhance the quality 
              of national statistics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className={`hover:text-[${styles.colors.primary}] transition-colors`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/training" className={`hover:text-[${styles.colors.primary}] transition-colors`}>
                  Training
                </Link>
              </li>
              <li>
                <Link to="/consultancy" className={`hover:text-[${styles.colors.primary}] transition-colors`}>
                  Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPinIcon className={`h-5 w-5 text-[${styles.colors.primary}]`} />
                <span>
                  Plot 15 Baskerville Avenue, Kololo<br />
                  P.O. Box 11140 Kampala (Uganda)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className={`h-5 w-5 text-[${styles.colors.primary}]`} />
                <a 
                  href="tel:+256774839058"
                  className={`hover:text-[${styles.colors.primary}] transition-colors`}
                >
                  +256 774 839 058
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className={`h-5 w-5 text-[${styles.colors.primary}]`} />
                <a 
                  href="mailto:info@easi.ac.ug"
                  className={`hover:text-[${styles.colors.primary}] transition-colors`}
                >
                  info@easi.ac.ug
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className={`${styles.typography.small} mb-4`}>
              Subscribe to our newsletter to receive updates about new programs and training opportunities.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[#444444] border border-[#555555] rounded-md focus:outline-none focus:border-[#dd8604]"
              />
              <button
                type="submit"
                className={`w-full px-4 py-2 ${styles.buttons.primary}`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#444444]">
        <div className={`${styles.sections.container} py-6`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`${styles.typography.small} mb-4 md:mb-0`}>
              © {currentYear} East African Statistics Institute. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className={`hover:text-[${styles.colors.primary}] transition-colors`}>
                Privacy Policy
              </a>
              <a href="/terms" className={`hover:text-[${styles.colors.primary}] transition-colors`}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
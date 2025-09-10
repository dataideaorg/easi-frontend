'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigation } from '@/lib/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Thin Top Banner */}
      <section className="relative bg-orange-200 py-2 md:py-3 ">
        <div className="container mx-auto px-4 ">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between text-black"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left side - Event info */}
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-2 md:mb-0">
              <span className="text-xs md:text-sm font-semibold bg-white/20 px-2 md:px-3 py-1 rounded-full border border-black">
                🚀 Upcoming Event
              </span>
              <span className="text-xs md:text-sm font-medium text-center sm:text-left">AI Workshop</span>
            </div>
            
            {/* Right side - Date, location, and buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 text-xs md:text-sm">
              {/* Date and location - hide on very small screens */}
              <div className="hidden sm:flex items-center space-x-3">
                <span>📅 Friday, September 12, to Wednesday, September 17, 2025, 9AM - 12PM</span>
                <span>📍 Online</span>
              </div>
              
              {/* Mobile: show only date */}
              <div className="sm:hidden">
                <span>📅 Sep 12-17, 2025 9AM - 12PM</span>
              </div>
              
              {/* Buttons */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-white/20 text-easi-orange border-easi-orange hover:bg-easi-orange/10 px-2 md:px-3 py-0.5 text-xs md:text-sm font-bold"
                >
                  <Link href="https://meet.google.com/ezh-omzw-byz">
                    Attend Online
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/EASI-Logo.png"
              alt="EASI Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-easi-orange bg-orange-50'
                    : 'text-easi-dark hover:text-easi-orange hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="outline" className="bg-white/20 text-easi-orange border-easi-orange hover:bg-easi-orange/10">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-easi-orange hover:text-easi-orange-hover bg-orange-50"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'text-easi-orange bg-orange-50'
                      : 'text-easi-dark hover:text-easi-orange hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                className="mt-4 bg-white/20 text-easi-orange border-easi-orange hover:bg-easi-orange/10"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { navigation, NavigationItem, NavigationSubItem } from '@/lib/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isDropdownActive = (items: NavigationSubItem[]) => {
    return items.some(item => isActive(item.href));
  };

  const hasDropdown = (item: NavigationItem): item is NavigationItem & { hasDropdown: true } => {
    return 'hasDropdown' in item && item.hasDropdown === true;
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Thin Top Banner */}
      <section className="relative bg-orange-200 py-2 md:py-3">
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
              <span className="text-xs md:text-sm font-medium text-center sm:text-left">Skilling Africa for the AI Era</span>
            </div>
            
            {/* Right side - Date, location, and buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 text-xs md:text-sm">
              {/* Date and location - hide on very small screens */}
              <div className="hidden sm:flex items-center space-x-3">
                <span>📅 Friday, October 31, 15 UTC (6PM EAT)</span>
                <span></span>
              </div>
              
              {/* Mobile: show only date */}
              <div className="sm:hidden">
                <span>📅 Friday, October 31, 15 UTC (6PM EAT)</span>
              </div>
              
              {/* Buttons */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-white/20 text-easi-orange border-easi-orange hover:bg-easi-orange/10 px-2 md:px-3 py-0.5 text-xs md:text-sm font-bold"
                >
                  <Link href="https://us06web.zoom.us/webinar/register/WN_SSpvvC-IT--m5DxpLsZqOg"
                  className=''>
                    Register Online
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
              <div key={item.name} className="relative">
                {hasDropdown(item) ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isDropdownActive(item.items)
                          ? 'text-easi-orange bg-orange-50'
                          : 'text-easi-dark hover:text-easi-orange hover:bg-orange-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                        >
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              target={subItem.external ? '_blank' : undefined}
                              rel={subItem.external ? 'noopener noreferrer' : undefined}
                              className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                isActive(subItem.href)
                                  ? 'text-easi-orange bg-orange-50'
                                  : 'text-easi-dark hover:text-easi-orange hover:bg-orange-50'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
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
                )}
              </div>
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
                <div key={item.name}>
                  {hasDropdown(item) ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
                          isDropdownActive(item.items)
                            ? 'text-easi-orange bg-orange-50'
                            : 'text-easi-dark hover:text-easi-orange hover:bg-orange-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDownIcon 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1 mt-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  target={subItem.external ? '_blank' : undefined}
                                  rel={subItem.external ? 'noopener noreferrer' : undefined}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                    isActive(subItem.href)
                                      ? 'text-easi-orange bg-orange-50'
                                      : 'text-easi-dark hover:text-easi-orange hover:bg-orange-50'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
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
                  )}
                </div>
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

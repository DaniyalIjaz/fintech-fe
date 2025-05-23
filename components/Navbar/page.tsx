'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Team', href: '/team' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];
// Fixed Heading 
const headlines = [
  "Trusted and results-driven process. Exceptional commitment and service at Fintech Business Advisors.",
  "Innovative fintech solutions designed to drive your business forward.",
  "Join a community of forward-thinking clients and partners.",
  "Connect with experts who prioritize your success — reach out today.",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // For Fixed Headings
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // For Dark Mode 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(!isDark);

    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(false); // default to light
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const pathname = usePathname();

  return (
    <motion.div
      className="pb-40"
      initial={{ opacity: 0, y: -20 }}   // Start slightly above (negative y)
      animate={{ opacity: 1, y: 0 }}     // Animate down to original position
      transition={{ duration: 0.5 }}
    >
      {/* Fixed Headings  */}
      <div
      style={{
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.6)' : '#111', // glassy dark background
  color: isDarkMode ? '#fff' : '#fff',
  padding: 'clamp(0.4rem, 1vw, 0.95rem) clamp(0.4rem, 1vw, 0.95rem)',
  textAlign: 'center',
  fontWeight: '400',
  fontSize: 'clamp(0.5rem, 1vw, 0.875rem)',
  zIndex: 1000,
  userSelect: 'none',
  overflow: 'hidden',
  height: 'clamp(1.25rem, 3vw, 1.5rem)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomLeftRadius: '12px',
  borderBottomRightRadius: '12px',
  borderBottom: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
  boxShadow: isDarkMode
    ? '0 4px 20px rgba(255, 255, 255, 0.1)' // softer glassy glow
    : '0 4px 8px rgba(0, 0, 0, 0.15)',
  backdropFilter: isDarkMode ? 'blur(8px)' : 'none', // glass effect in dark mode
  transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
}}

      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ margin: 0 }}
          >
            {headlines[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Navbar  */}
      <nav className={`flex justify-center items-center text-foreground bg-background`}>
        <div
          className="fixed w-full z-50 top-6 md:top-11 mx-auto sm:px-6 lg:px-14 max-w-7xl
          bg-glassWhite dark:bg-glassBlack backdrop-blur-[10px]
          bg-gradient-to-tr from-white/15 to-white/5 rounded-[20px]
          shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] px-3 md:px-6 py-1 md:py-3"
        >
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            {/* logo  */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={isDarkMode ? '/images/nav-logo-white.png' : '/images/nav-logo.png'}
                alt="Logo"
                width={120}
                height={120}
                className="w-auto h-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative inline-block ${isActive
                        ? 'text-black dark:text-white font-bold text-lg'
                        : 'text-black dark:text-white font-medium'
                      }`}
                  >
                    <span
                      className="
                        inline-block
                        transition-all duration-300 ease-in-out
                        will-change-transform
                      "
                      style={{ display: 'inline-block' }}
                    >
                      {/* Animate scale and translate on hover without affecting layout */}
                      <motion.span
                        initial={{ filter: 'none' }}
                        whileHover={{
                          y: -4,
                          scale: 1.05,
                          filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.3))',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        style={{ display: 'inline-block' }}
                      >
                        {label}
                      </motion.span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle & Hamburger */}
            <div className="flex items-center space-x-4">
              {/* Custom Dark Mode Toggle */}
              <div className="container">
                <label className="toggle relative w-[56px] h-[56px] grid place-items-center cursor-pointer">
                  <input
                    id="switch"
                    className="input hidden"
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                  />

                  {/* Moon Icon */}
                  <div
                    className={`icon icon--moon absolute inset-0 grid place-items-center transition-transform duration-500 delay-200 ${isDarkMode ? 'transform rotate-360 scale-0' : ''
                      }`}
                  >
                    <svg height="32" width="24" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        clipRule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Sun Icon */}
                  <div
                    className={`icon icon--sun absolute inset-0 grid place-items-center transition-transform duration-500 delay-200 ${!isDarkMode ? 'transform scale-0' : 'transform scale-100 rotate-360'
                      }`}
                  >
                    <svg height="32" width="24" fill="#ffffff" viewBox="0 0 24 24">
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                  </div>
                </label>
              </div>

              {/* Hamburger */}
              <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-gray-300">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden text-center"
              >
                <div className="flex flex-col px-6 py-4 space-y-4">
                  {navItems.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={`relative inline-block ${isActive
                            ? 'text-black dark:text-white font-bold text-lg'
                            : 'text-black dark:text-white font-medium'
                          }`}
                      >
                        <span
                          className="
                            inline-block
                            transition-all duration-300 ease-in-out
                            will-change-transform
                          "
                          style={{ display: 'inline-block' }}
                        >
                          <motion.span
                            initial={{ filter: 'none' }}
                            whileHover={{
                              y: -4,
                              scale: 1.05,
                              filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.3))',
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{ display: 'inline-block' }}
                          >
                            {label}
                          </motion.span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.div>
  );
}

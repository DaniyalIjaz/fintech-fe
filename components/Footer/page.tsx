// Footer.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div className='flex items-center justify-center py-6'>
            <motion.footer
                className="w-[80vw] flex items-center justify-center px-10 py-6 backdrop-blur-[10px] bg-gradient-to-tr from-white/15 to-white/5 rounded-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:w-[60vw]">
                    <div className='pb-4'>
                        <Link href={'/'} className='flex justify-center md:justify-start py-1'>
                            {/* Light mode logo */}
                            <Image
                                src="/images/nav-logo.png"
                                alt="Logo"
                                width={120}
                                height={120}
                                className="w-auto h-auto dark:hidden"
                                priority
                            />

                            {/* Dark mode logo */}
                            <Image
                                src="/images/nav-logo-white.png"
                                alt="Logo"
                                width={120}
                                height={120}
                                className="w-auto h-auto hidden dark:block"
                                priority
                            />

                        </Link>
                        <div className="text-center md:text-left w-[16rem]">
                            <p className='leading-none dark:text-gray-300  text-gray-900 text-[0.85rem]'>© 2025 Xotek Solutions Private Limited. All rights reserved.</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-4 font-semibold justify-center md:justify-start'>
                            <a href="#" className="text-aliceblue hover:text-[#015496] transition-colors duration">
                                Contact
                            </a>
                            <a href="#" className="text-aliceblue hover:text-[#015496] transition-colors duration">
                                About
                            </a>
                        </div>
                        <div className='flex gap-3 justify-center md:justify-start py-1'>
                            <Link
                                href="https://www.linkedin.com/company/fintech-business-advisors"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#015496] transition-colors duration-300"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                    <path d="M20.5 2H3.5C3.1 2 2.7 2.2 2.4 2.4 2.2 2.7 2 3.1 2 3.5v17c0 .4.2.8.4 1.1.3.3.7.4 1.1.4h17c.4 0 .8-.2 1.1-.4.3-.3.4-.7.4-1.1v-17c0-.4-.2-.8-.4-1.1C21.3 2.2 20.9 2 20.5 2zM8 19H5v-9h3v9zM6.5 8.3A1.8 1.8 0 1 1 6.5 4.7 1.8 1.8 0 0 1 6.5 8.3zM19 19h-3v-4.7c0-1.4-.6-1.9-1.4-1.9-1.1 0-1.6.8-1.6 1.9V19h-3v-9h2.9v1.3c.4-.7 1.2-1.4 2.7-1.4 1.9 0 3.4 1.1 3.4 3.6V19z" />
                                </svg>
                            </Link>

                            {/* Facebook */}
                            <Link
                                href="https://www.facebook.com/yourpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#1877F2] transition-colors duration-300"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                    <path d="M22 12A10 10 0 1 0 12 22v-7h-2v-3h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3H15v7a10 10 0 0 0 7-10z" />
                                </svg>
                            </Link>

                            {/* Instagram */}
                            {/* <Link
                                href="https://www.instagram.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E1306C] transition-colors duration-300"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
                                </svg>
                            </Link> */}


                        </div>
                        <div>
                            <p className='dark:text-gray-300  text-gray-900'>info@finbize.com</p>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
};

export default Footer;

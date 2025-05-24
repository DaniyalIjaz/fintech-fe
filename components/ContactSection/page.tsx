"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImageStats } from "../ImageStats/page";

const ContactSection = () => {
  return (
    <section className="w-full bg-white dark:bg-background pt-10 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Get in Touch with Us
        </h4>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 text-sm sm:text-base">
          Reach out for tailored financial solutions and expert assistance today.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-y-12 lg:gap-x-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 p-6 sm:p-8 backdrop-blur-[10px] bg-gradient-to-tr from-white/15 to-white/5 rounded-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Your First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Your Email Address*
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Your Message*
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message here"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="relative px-6 py-2 font-mono font-bold rounded-full transition-colors duration-300 ease-linear
                    bg-black text-white
                    before:absolute before:right-1/2 before:top-1/2 before:-z-[1]
                    before:h-3/4 before:w-2/3 before:origin-bottom-left 
                    before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping
                    before:rounded-full before:bg-black
                    hover:bg-gray-800 hover:before:bg-gray-800
                    dark:bg-white dark:text-black 
                    dark:before:bg-white dark:hover:bg-gray-100 dark:hover:before:bg-gray-100"
                >
                  SUBMIT YOUR INQUIRY
                </button>
              </div>
            </form>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <ImageStats imgSrc={"images/contact/contact.avif"} />
          </motion.div>
        </div>
      </div>

      {/* Contact Us  */}

    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        duration: 0.8,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="px-4 sm:px-12 lg:px-32 py-10 scroll-mt-20 "
    >
      <div className="lg:w-1/3">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6">
          Reach out to Fintech Business Advisors for expert bookkeeping,
          accounting, and BPO services tailored for your business needs in the
          US.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              Location
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Suite 78, Imperial Garden, Paragon City, Lahore.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              Hours
            </h4>
            <p className="text-gray-600 dark:text-gray-400">9 AM - 5 PM</p>
          </div>
        </div>
      </div>
    </motion.section>

    </section>
  );
};

export default ContactSection;

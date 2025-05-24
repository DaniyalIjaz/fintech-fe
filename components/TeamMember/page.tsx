'use client';

import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string[];
  imageUrl: string;
}

const TeamMember = ({ name, role, description, imageUrl }: TeamMemberProps) => {
  return (
    <section className="w-full bg-white dark:bg-background px-4 md:px-12 lg:px-24 py-0 md:py-8">
         

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="px-4 sm:px-10 lg:px-2 py-10"
        >
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 md:gap-20">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="lg:w-2/3"
            >
              <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{name}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6">{role}</p>

              <div className="space-y-4">
                {description.map((desc, index) => (
                  <h4 key={index} className="font-semibold text-gray-800 dark:text-gray-200">
                    {desc}
                  </h4>
                ))}
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="lg:w-[18vw]"
            >
              <img
                src={imageUrl}
                alt={`${name} Illustration`}
                className="w-full h-auto object-contain rounded-[20px] shadow-xl"
              />
            </motion.div>
          </div>
        </motion.section>

    </section>
  );
};

export default TeamMember;

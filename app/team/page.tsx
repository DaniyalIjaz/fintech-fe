'use client'
import TeamMember from '@/components/TeamMember/page'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
  return (
    <div>
         {/* Animated Heading */}
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white py-0 md:py-10"
        >
          Meet Our Team
        </motion.h5>
        <div>

      <TeamMember
  name="Umer Raza"
  role="Founder & Head of CFO Services"
  imageUrl="/images/team/mem1.avif"
  description={[
    "Umer Raza is a Chartered Accountant (CA) and FMVA-certified professional with deep expertise in financial strategy, performance optimization, and operational efficiency. With hands-on experience across various industries, he partners with businesses to drive growth through informed financial decision-making.",
    "As the Founder of Fintech Business Advisors, Umer leads the delivery of high-impact Fractional CFO services, financial modeling, and outsourced accounting solutions for US-based businesses. From streamlining bookkeeping operations to fully managing the finance function, he ensures clients benefit from accurate reporting, strategic insights, and scalable financial systems tailored to their unique needs."
  ]}
/>

      <TeamMember
  name="Kh. Anwaar Ahmad"
  role="CA – Founder & Head of Bookkeeping Services"
  imageUrl="/images/team/mem2.avif"
  description={[
    "Kh. Anwaar Ahmad is a Chartered Accountant (CA) with extensive experience in bookkeeping and financial management. He brings a strong focus on accuracy, compliance, and streamlined processes to every engagement, ensuring that clients’ financial records are well-maintained and audit-ready.",
    "As the Founder & Head of Bookkeeping Services at Fintech Business Advisors, Anwaar leads the delivery of tailored bookkeeping solutions for US-based businesses. His deep expertise, hands-on approach, and commitment to quality make him a trusted partner in helping clients achieve financial clarity and control."
  ]}
/>

  </div>
    </div>
  )
}

export default page

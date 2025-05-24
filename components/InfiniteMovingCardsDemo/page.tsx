"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <>
    <div className=" rounded-[20px] flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
        />
    </div>
    <div className="rounded-[20px] flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        />
    </div>
        </>
  );
}

const testimonials = [
  {
    quote:
      "Umer is an incredible human who pours his heart into your startup to help turn the vision into a reality. He has very impressive skills in finances, math and makes formula creation like a breeze. Truly appreciate the support and experience you have provided to help raise capital for my startup. I look forward to continue working together for a long time!",
    name: "Italo C. | Director",
  },
  {
    quote:
      "I have worked with Umer. I found him a keen and punctual person in terms of work. He met his deadline and his work was according to the requirements of the company. Good understanding of accounting processes.",
    name: "Shehryar A. | assistant manager",
  },
  {
    quote: "Very dependable real estate analyst, Highly recommended",
    name: "Real Estate Financial Modeler",
  },
  {
    quote:
      "Umer and I had a great working relationship and I would recommend him for your accounting needs. I only ended the contract because we decided to bring this function in house.",
    name: "Odoo Bookkeeping - Long Term",
  },
];

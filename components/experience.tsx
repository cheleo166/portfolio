"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { LuCheckCircle } from "react-icons/lu";

export default function Experience() {
  const { ref } = useSectionInView("經歷");

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[53rem] mx-auto"
    >
      <SectionHeading>我的經歷</SectionHeading>
      <ul className="relative border-l border-gray-200 dark:border-gray-700">
        {experiencesData.map((item, index) => (
          <motion.li
            key={index}
            className="mb-10 ml-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              {item.location}
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

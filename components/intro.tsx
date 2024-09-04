"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSpring, animated } from "react-spring";

const jobs = ["斜槓設計師", "斜槓剪輯師", "斜槓企劃"];

export default function Intro() {
  const { ref } = useSectionInView("首頁", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [jobText, setJobText] = useState("");
  const [jobIndex, setJobIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const waveAnimation = useSpring({
    transform: isWaving ? "rotate(20deg)" : "rotate(0deg)",
    config: { tension: 300, friction: 10 },
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentJob = jobs[jobIndex];

    const handleTyping = () => {
      setJobText((current) => {
        if (!isDeleting && current.length < currentJob.length) {
          return currentJob.slice(0, current.length + 1);
        } else if (isDeleting && current.length > 0) {
          return current.slice(0, -1);
        } else if (current.length === 0 && isDeleting) {
          setIsDeleting(false);
          setJobIndex((prev) => (prev + 1) % jobs.length);
          return "";
        } else {
          setIsDeleting(true);
          return current;
        }
      });
    };

    const typingDelay = isDeleting ? 100 : 100;
    const pauseDelay = 500;

    if (jobText === currentJob || jobText === "") {
      timer = setTimeout(handleTyping, pauseDelay);
    } else {
      timer = setTimeout(handleTyping, typingDelay);
    }

    return () => clearTimeout(timer);
  }, [jobText, isDeleting, jobIndex]);

  const handleImageClick = () => {
    setShowEmoji(true);
    setIsWaving(true);
    setTimeout(() => {
      setIsWaving(false);
      setTimeout(() => {
        setShowEmoji(false);
      }, 500); // 等待揮手動畫結束後隱藏 emoji
    }, 1000); // 揮手動畫持續時間
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/mine.png"
              alt="陳彥廷的照片"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl cursor-pointer"
              onClick={handleImageClick}
            />
          </motion.div>

          {showEmoji && (
            <animated.span
              className="absolute bottom-0 right-0 text-4xl"
              style={waveAnimation}
            >
              👋
            </animated.span>
          )}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">你好,我是陳彥廷。我是一名{jobText}</span>
        <span className="inline-block w-1 h-8 ml-1 bg-sky-500 animate-blink"></span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-sky-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-sky-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("與我聯絡");
            setTimeOfLastClick(Date.now());
          }}
        >
          聯絡我{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          下載履歷{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-sky-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-sky-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href="https://github.com"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

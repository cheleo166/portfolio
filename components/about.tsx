"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("關於");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mt-28" // 添加 mt-28 來增加上邊距
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>關於我</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="mb-3">
          在長榮大學互動設計系<span className="font-medium">畢業之後</span>
          ，我決定追隨我對網頁設計的熱情。 我參加了產業新尖兵培訓，學習了
          <span className="font-medium">網頁設計等技術</span>。
          <span className="font-medium">我除了喜歡設計</span>
          也喜歡探索新技術。 我<span className="underline">熱愛</span>
          最終找到問題解決方案的感覺。 我的具備技能有
          <span className="font-medium">
            Photoshop、Illustrator、Blender、CapCut{" "}
          </span>
          。 也正在努力鑽研網頁技術。
          <span className="font-medium">
            我目前正在尋找一個全職的工作能夠發揮我的所長。
          </span>
        </p>

        <p>
          <span className="font-medium">除了工作以外</span>
          ，我喜歡玩電子遊戲、打羽球和撸貓。 我也喜歡
          <span className="font-medium">學習新事物</span>
          <span className="font-medium"></span>。
        </p>
      </motion.div>
    </motion.section>
  );
}

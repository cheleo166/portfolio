import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "首頁",
    hash: "#home",
  },
  {
    name: "關於我",
    hash: "#about",
  },
  {
    name: "我的作品",
    hash: "#projects",
  },
  {
    name: "經歷",
    hash: "#experience",
  },
  {
    name: "技能",
    hash: "#skills",
  },
  {
    name: "與我聯絡",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    title: "過去的影片剪輯",
    description: "項目描述...",
    tags: ["CapCut"],
    imageUrl: "/Snipaste_2024-09-05_03-16-14.png", // 確保這個路徑正確
  },
  {
    title: "影像平面設計",
    description: "項目描述...",
    tags: ["Photoshop", "Illustrator"],
    imageUrl: "/project2.png", // 確保這個路徑正確
  },
  // 可以添加更多項目...
];

export const experiencesData = [
  {
    title: "深緣及水火鍋",
    location: "內場人員",
    description:
      "食材準備：負責準備火鍋的各種食材，包括洗、切、擺盤等，確保每樣食材新鮮、安全，並且擺盤美觀。湯底熬製：根據店家的配方來製作各種湯底，確保味道穩定，並且隨時補充客人需要的湯底。衛生清潔：保持工作區域的乾淨整潔，包括清洗使用過的器具、保持地面乾燥，並按照食品安全規定處理食材。協助廚房運作：與其他內場人員協作，確保火鍋的準備流程順暢，並在高峰期時有效分配工作。",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
  {
    title: "畢業於長榮大學",
    location: "長榮大學互動設計系",
    description:
      "我在互動設計系學習了影像輯平面設計等等相關技能，為了提升自我而持續去購買線上課程自學。",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "產業新尖兵培訓",
    location: "國立台南大學",
    description: "我參加了為期3月的網頁設計培訓，學習了前端和後端技術等知識。",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "麻新電子",
    location: "行銷企劃美編助理",
    description:
      "我的工作主要圍繞在剪輯、設計和電商管理，還有一部分是社群小編的工作。運用設計的視覺效果來吸引目光，並利用剪輯技巧將訊息傳遞得更加有力。電商方面，管理蝦皮等電商及官方通路確保消費者能夠輕鬆找到並喜愛我們的商品並成功購買。並作為社群小編和大家在fb及ig互動",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  }, // 可以添加更多經歷...
];

export const skillsData = [
  "Photoshop",
  "Illustrator",
  "CapCut",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "bootstrap",
  "AI工具等等",
];

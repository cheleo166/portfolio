"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!senderEmail || !message) {
    return {
      error: "請填寫所有必填欄位。",
    };
  }

  if (typeof senderEmail !== "string" || typeof message !== "string") {
    return {
      error: "無效的表單數據。",
    };
  }

  try {
    await resend.emails.send({
      from: "聯絡表單 <onboarding@resend.dev>",
      to: "cheleo166@gmail.com", // 替換為您的實際郵箱地址
      subject: "來自網站的新訊息",
      replyTo: senderEmail,
      text: message,
    });

    return {
      data: "發送成功！",
    };
  } catch (error: unknown) {
    return {
      error: "發送失敗。",
    };
  }
};

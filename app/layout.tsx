import "./globals.css";
import { Inter, Noto_Sans_TC } from "next/font/google";
import Header from "@/components/header";
import { ActiveSectionContextProvider } from "@/context/active-section-context";
import { ThemeContextProvider } from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const notoSansTC = Noto_Sans_TC({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "陳彥廷的Portfolio",
  description: "Hello! 我是陳彥廷，一個斜槓設計師",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body
        className={`${inter.className} ${notoSansTC.className} bg-sky-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-sky-900 dark:text-sky-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

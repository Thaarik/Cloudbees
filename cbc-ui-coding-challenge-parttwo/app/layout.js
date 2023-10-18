import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitHub User List and Pages",
  description: "CBC-UI-Coding Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-900`} >
        <ThemeProvider attribute="class" defaultTheme1="system" enableSystem>
          <ThemeSwitch/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

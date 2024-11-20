import type { Metadata } from "next";
import localFont from "next/font/local";
import {DM_Sans}from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const font = DM_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Nezter",
  description: "Automate your work with Nezter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ThemeProvider
        attribute= "class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        
        >
           {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Anek_Telugu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const AnekTelugu = Anek_Telugu({ 
  subsets: ["latin"], 
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Lucas POSE • Fullstack Developer",
  description: "Application developer, fullstack developer, Web Designer, and software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          geistSans.variable, 
          geistMono.variable,
          AnekTelugu.variable, 
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import {cn} from '@/lib/utils'
const fontSans = Roboto_Serif({ 
  subsets: ["latin"],
  weight: ['300' ,'400', '500', '600', "700"],
  variable: '--font-sans'
 });

export const metadata: Metadata = {
  title: "Health Trakr",
  description: "HealthTrakr is a streamlined patient management system that simplifies appointment scheduling, patient record management, and communication with integrated tools and a modern design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-green-50 font-sans antialiased', fontSans.variable)}>{children}</body>
    </html>
  );
}

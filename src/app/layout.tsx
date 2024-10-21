import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from './../components/sidebar/index';
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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

export const metadata: Metadata = {
  title: "ReCoin",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}
        storageKey="dashboard-theme"
        >
        <Navbar/>
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <Sidebar/>
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">
            {children}
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

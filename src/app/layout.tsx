"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import RouteTransition from "@/components/ui/RouteTransition";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="en">
  <body className={inter.className}>
<Sidebar
  isOpen={isSidebarOpen}
  setIsOpen={setIsSidebarOpen}
/>

<div className="relative">
  {/* Spacer that matches sidebar width */}
  <div
    className={`
      fixed top-0 left-0 h-screen
      transition-[width] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${isSidebarOpen ? "w-[165px]" : "w-[40px]"}
    `}
  />

  <main className="relative">
    <div
      className={`
        w-full max-w-5xl mx-auto px-6
        transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isSidebarOpen ? "translate-x-[165px]" : "translate-x-[40px]"}
      `}
    >
      <RouteTransition>
        {children}
      </RouteTransition>
    </div>
  </main>
</div>

      </body>
    </html>
  );
}
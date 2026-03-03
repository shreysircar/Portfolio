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
<body className={`${inter.className} flex overflow-x-hidden`}>

  <Sidebar
    isOpen={isSidebarOpen}
    setIsOpen={setIsSidebarOpen}
  />

  <main className="flex-1">
   <div className="w-full max-w-5xl mx-auto px-6">
      <RouteTransition>
        {children}
      </RouteTransition>
    </div>
  </main>

</body>
    </html>
  );
}
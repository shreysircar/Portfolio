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
      <body className={`${inter.className} flex`}>

        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        <main
          className={`
            flex-1
            transition-[margin] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isSidebarOpen ? "ml-[165px]" : "ml-[40px] flex justify-center"}
          `}
        >
          <div className={`w-full ${!isSidebarOpen ? "max-w-5xl" : ""} px-6`}>
            <RouteTransition>
              {children}
            </RouteTransition>
          </div>
        </main>

      </body>
    </html>
  );
}
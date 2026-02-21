import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar"; // adjust path if needed

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />

        {/* Desktop offset */}
        <main className="ml-[165px]">
          {children}
        </main>
      </body>
    </html>
  );
}
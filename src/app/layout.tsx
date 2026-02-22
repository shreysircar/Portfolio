import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import RouteTransition from "@/components/ui/RouteTransition";

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

<main className="ml-[165px] w-[calc(100%-165px)]">
          <div className="px-6 py-12">
            <RouteTransition>
              {children}
            </RouteTransition>
          </div>
        </main>

      </body>
    </html>
  );
}
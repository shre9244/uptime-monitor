import "./globals.css";
import { startUptimeRunner } from "@/lib/runner";

import type { Metadata } from "next";
import Link from "next/link";

startUptimeRunner();


export const metadata: Metadata = {
  title: "Uptime Monitor",
  description: "Monitor uptime and downtime of your services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav className="border-b bg-white">
  <div className="max-w-5xl mx-auto px-6 py-4 flex gap-6">
    <Link href="/" className="font-semibold text-gray-800">
      Home
    </Link>
    <Link href="/dashboard" className="font-semibold text-gray-800">
      Dashboard
    </Link>
  </div>
</nav>


        {/* Page Content */}
        <main className="max-w-5xl mx-auto px-6 py-8">
  {children}
</main>

      </body>
    </html>
  );
}

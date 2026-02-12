import "./globals.css";
import Link from "next/link";

export const metadata = {
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
        <nav className="border-b px-6 py-4 flex gap-6">
          <Link href="/" className="font-semibold">
            Home
          </Link>

          <Link href="/dashboard" className="font-semibold">
            Dashboard
          </Link>
        </nav>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}

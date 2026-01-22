import "../globals.css";
import { Nav } from "@/components/ui/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Web developer portfolio.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <Nav />
        <main className="pb-16 pt-10">{children}</main>
      </body>
    </html>
  );
}

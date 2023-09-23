import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

const ubuntu = Ubuntu({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dyloge",
  description:
    "An AI-powered app that simplifies the process of crafting articles, stage plays, screenplays, and captivating long stories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ubuntu.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

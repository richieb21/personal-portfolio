import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Richard Bai",
  description: "Richard Bai's personal programming portfolio",
  authors: {
    name: "Richard Bai",
  },
  keywords: [
    "Richard Bai",
    "Portfolio",
    "Software Developer",
    "University of Waterloo",
    "Computer Science",
    "Full-Stack",
    "React",
    "Next.js",
    "TailwindCSS",
    "Vercel",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.io",
    "TypeScript",
    "Vite",
    "Postman",
    "GitHub",
    "LinkedIn",
    "Instagram",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <head>
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

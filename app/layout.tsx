import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
      <head>
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <body className={GeistSans.className}>
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

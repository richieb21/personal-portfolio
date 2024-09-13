import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/richard-bai-426b1a21a/",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/richieb21",
      label: "GitHub",
      icon: SiGithub,
    },
    {
      link: "https://www.instagram.com/richie.b18/",
      label: "Instagram",
      icon: SiInstagram,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="alex-brush-regular text-3xl font-light">Richard Bai 👨🏻‍💻</h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target="_blank"
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

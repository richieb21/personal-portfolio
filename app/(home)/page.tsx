import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { SiReact } from "react-icons/si";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconPaperclip,
} from "@tabler/icons-react";

export default function page() {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
      icon: <SiReact className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <SiReact className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <SiReact className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#hero",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/richie.b18/",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/richard-bai-426b1a21a/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/richieb21",
    },
    {
      title: "Resume",
      icon: (
        <IconPaperclip className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <div className="max-w-7xl mx-auto p-5">
          <FloatingNav navItems={navItems} />
          <Navbar />
          <section id="hero">
            <HeroSection />
          </section>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50px",
              background: "linear-gradient(to bottom, transparent, black)",
            }}
          ></div>
        </div>

        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0"></div>
      </div>

      <div className="max-w-7xl mx-auto mt-20">
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Project />
        </section>
        <Footer />
      </div>
      <FloatingDock items={links} />
    </div>
  );
}

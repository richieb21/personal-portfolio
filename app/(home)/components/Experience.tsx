"use client";

import Title from "./Title";
import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Shopify",
    role: "Software Engineer Intern",
    date: "May 2025 - August 2025",
    description: "Incoming Summer 2025",
  },
  {
    company: "Trend Micro",
    role: "Software Engineer Intern",
    date: "January 2025 - April 2025",
    description:
      "Software Engineer Intern on the V1ES ASRM and Data Forwarding Team",
  },
  {
    company: "Savi Finance",
    role: "Full Stack Developer Intern",
    date: "May 2024 - Present",
    description:
      "Developed core web application features and expanded microservices",
  },
  {
    company: "Voice Depot",
    role: "Freelance Shopify Developer",
    date: "May 2024 - August 2024",
    description:
      "Web scraped thousands of VOIP products and built company store",
  },
  {
    company: "Freedo Technologies",
    role: "Software Engineer Intern",
    date: "May 2022 - Jan 2023",
    description:
      "Researched and implemented object detection model for roof shapes",
  },
  {
    company: "Youthful Spark",
    role: "Vice President & Web Developer",
    date: "Jan 2021 - Dec 2023",
    description: "Organized and led STEM classes, camps and workshops ",
  },
  // Add more experiences later
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;

        const startFill = viewportHeight * 0.8;
        const endFill = -sectionHeight * 0.2;

        if (sectionTop < startFill && sectionTop > endFill) {
          const progress = (startFill - sectionTop) / (startFill - endFill);
          setScrollProgress(Math.min(Math.max(progress, 0), 1));
        } else if (sectionTop <= endFill) {
          setScrollProgress(1);
        } else {
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-8 bg-black relative">
      <div className="container mx-auto px-4">
        <Title
          text={"EXPERIENCE"}
          className="flex flex-col items-center justify-center"
        />
        <div className="relative mt-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-600">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-1/2 px-4">
                <div
                  className={`bg-black p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {exp.date}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

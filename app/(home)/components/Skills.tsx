"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCplusplus,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "TailwindCSS",
      Icon: SiTailwindcss,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "PostGreSQL",
      Icon: SiPostgresql,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "C++",
      Icon: SiCplusplus,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text={"SKILLS"}
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
}

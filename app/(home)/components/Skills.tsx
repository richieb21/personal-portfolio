"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiAmazonaws,
  SiDocker,
  SiFlask,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
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
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "PostGreSQL",
      Icon: SiPostgresql,
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Flask",
      Icon: SiFlask,
    },
    {
      text: "Docker",
      Icon: SiDocker,
    },
    {
      text: "Kubernetes",
      Icon: SiKubernetes,
    },
    {
      text: "AWS",
      Icon: SiAmazonaws,
    },
    {
      text: "GraphQL",
      Icon: SiGraphql,
    },
    {
      text: "PyTorch",
      Icon: SiPytorch,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Python",
      Icon: SiPython,
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

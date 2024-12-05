import React from "react";
import {
  SiD3Dotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiReact,
  SiRender,
  SiSocketdotio,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "elitecode",
      description:
        "A LeetCode-inspired platform featuring interactive coding challenges with real-time code execution and a built-in compiler.",
      tech: [SiReact, SiD3Dotjs, SiNodedotjs, SiExpress, SiMongodb],
      link: "https://github.com/elitecode-org",
      cover: "/elitecode.png",
      background: "bg-white",
    },
    {
      title: "ChatIsThisReal",
      description:
        "A chrome extension that communicates to an AI agent in real time through audio and textual transcription to provide users with due diligence",
      tech: [SiReact, SiFlask, SiOpenai, SiMongodb, SiPostman],
      link: "https://github.com/richieb21/opensesame",
      cover: "/chatisthisreal.png",
      background: "bg-white",
    },
    {
      title: "Acceleratr",
      description:
        "A resume builder that uses BERT to match best suited projects and experiences from a master resume to automatically generate and compile a latex resume",
      tech: [SiVite, SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio],
      link: "https://github.com/richieb21/ctrl-hack-del",
      cover: "/acceleratr.png",
      background: "bg-white",
    },
    {
      title: "Sorting Visualizer",
      description:
        "An interactive visualization tool demonstrating various sorting algorithms in action, helping users understand sorting mechanics.",
      tech: [SiNextdotjs, SiVercel, SiTypescript],
      link: "https://sorting-visualizer-88s3.vercel.app/",
      cover: "/sorting.png",
      background: "bg-white",
    },
  ];

  return (
    <div className="py-10 mt-10 p-5 sm:p-0">
      <Title
        text="PROJECTS"
        className="flex flex-col items-center justify-center"
      />

      <div className="grid grid-cols-2 pt-10 gap-8">
        {projects.map((project, index) => {
          return (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={cn(
                  "rounded-lg p-[1px] bg-gradient-to-r from-pink-500 to-purple-500",
                  project.background
                )}
              >
                <div className="bg-black rounded-lg">
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full space-y-5"
                  >
                    <div className="space-y-5">
                      <h1 className="text-2xl font-bold">{project.title}</h1>
                      <p className="text-sm text-neutral-300">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-5">
                        {project.tech.map((Icon, idx) => {
                          return <Icon key={idx} className="w-8 h-8" />;
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

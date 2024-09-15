import React from "react";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
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
      title: "Code Wizard",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostman],
      link: "https://github.com/richieb21/code-wizard",
      cover: "/code-wizard.png",
      background: "bg-white",
    },
    {
      title: "Beacons.us",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostman],
      link: "https://github.com/willi-li-am/beacons",
      cover: "/beacons.png",
      background: "bg-white",
    },
    {
      title: "Sorting Visualizer",
      tech: [SiNextdotjs, SiVercel, SiTypescript],
      link: "https://sorting-visualizer-88s3.vercel.app/",
      cover: "/sorting.png",
      background: "bg-white",
    },
    {
      title: "Pulsar Chat-App",
      tech: [SiVite, SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio],
      link: "https://github.com/richieb21/pulsar-chatapp",
      cover: "/pulsar.png",
      background: "bg-white",
    },
  ];

  return (
    <div className="py-10 mt-10 p-5 sm:p-0">
      <Title
        text="PROJECTS"
        className="flex flex-col items-center justify-center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={cn("p-0.5 rounded-lg ", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>

                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, idx) => {
                        return <Icon key={idx} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

const ProjectsPage = () => {
  type Project = {
    title: string;
    description: string;
    skills: string[];
    github: string; // Link
    demo: string; // Link
  };

  const projects: Project[] = [
    {
      title: "Marketloo",
      description:
        "A platform to bet on hackathons local to you with market making agents.",
      skills: ["Next.js", "Supabase", "RabbitMQ", "Postgres"],
      github: "https://github.com/steventanyang/market_loo",
      demo: "https://devpost.com/software/marketloo-prediction-platform-for-hackathons",
    },
    {
      title: "EliteCode",
      description:
        "A web and web extension that scrapes user's Leetcode history, submissions and active code. Provides submission feedback, hint generation, Anki-like revision and a graph to visual your submissions like obsidian",
      skills: ["React.js", "Plasmo", "GPT 4o", "MongoDB"],
      github: "https://github.com/elitecode-org",
      demo: "",
    },
    {
      title: "ChatIsThisReal",
      description:
        "A browser extension that listens to media you consume and uses agents to determine it is misleading",
      skills: ["Plasmo", "Flask", "Tavily", "Langchain"],
      github: "https://github.com/richieb21/opensesame",
      demo: "",
    },
  ];

  return (
    <div className="min-h-screen bg-bgtheme text-gray-800 relative">
      <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
        <Navbar currentPage="projects" />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
          <p className="text-xl text-gray-600">
            things that I&apos;ve worked on
          </p>
        </header>

        <div className="space-y-12">
          {projects.map((project, key) => (
            <div
              key={key}
              className="border border-gray-200 bg-[#FAFBFA] rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.skills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#F6A45C] transition-colors"
                  aria-label="GitHub"
                >
                  <IconBrandGithub size={24} stroke={1.5} />
                </a>
                <a
                  href={project.demo}
                  className="text-gray-700 hover:text-[#F6A45C] transition-colors"
                  aria-label="Live Demo"
                >
                  <IconWorld size={24} stroke={1.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <SocialIcons />
        </footer>
      </div>
    </div>
  );
};

export default ProjectsPage;

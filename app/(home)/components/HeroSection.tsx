"use client";

import Link from "next/link";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function HeroSection() {
  const words = ["a Software Engineer", "a Problem Solver", "an Innovator"];

  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-4xl font-normal lg:text-5xl">
          Hi, I&apos;m Richard Bai 👋 <br />{" "}
          <span className="mt-2 block">
            {"And I'm"}
            <FlipWords words={words} />
          </span>
        </h1>

        <p className="md:w-76 text-xl text-white-300 font-extralight w-[75%]">
          {
            "I'm a second year student studying Computer Science at the University of Waterloo. I am passionate about creating innovative solutions to pressing issues and making them readily available."
          }
        </p>

        <Link href={"mailto:r25bai@uwaterloo.ca"} className="inline-block">
          <h1 className="text-2xl hover:text-blue-400 transition duration-350 ease-in">
            {"Contact Me!"}
          </h1>
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  );
}

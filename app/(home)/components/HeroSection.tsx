"use client";

import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React, { useState } from "react";
import Title from "./Title";

export default function HeroSection() {
  const [buttonText, setButtonText] = useState("Seeking 2024 Summer COOP! 🚀");
  const [isFading, setIsFading] = useState(false);

  const handleChangeText = () => {
    setIsFading(true);
    setTimeout(() => {
      setButtonText((prevButtonText) =>
        prevButtonText === "Seeking 2024 Summer COOP! 🚀"
          ? "Take a look at my resume!"
          : "Seeking 2024 Summer COOP! 🚀"
      );
      setIsFading(false);
    }, 250);
  };

  const handlePDF = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋 <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Richard."}
          </span>
        </h1>

        <p className="md:w-76 text-lg text-white-300 font-light">
          {
            "I am currently studying Computer Science at the University of Waterloo. I'm a Full-Stack Software Developer passionate about creating applications that make a difference. I love learning about different tools and technologies and how they can be used to solve real-world problems. Let's have a chat!"
          }
        </p>

        <Link href={"mailto:r25bai@uwaterloo.ca"} className="inline-block">
          <Title text={"Contact Me 📭"} />
        </Link>
      </div>

      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>

        <div onMouseEnter={handleChangeText} onMouseLeave={handleChangeText}>
          <MovingBorderBtn onClick={handlePDF}>
            <p
              className={`text-md m-2 font-semibold transition-opacity ease-in-out duration-500 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {buttonText}
            </p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import SocialIcons from "@/components/SocialIcons";
import Navbar from "@/components/Navbar";

const Essentials = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFA] text-gray-800 relative">
      <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
        <Navbar currentPage="about" />

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Richard Bai</h1>
          <h2 className="text-xl md:text-2xl text-gray-600">
            Engineer, Student, Builder
          </h2>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="mb-4">
            I&apos;m a software engineer who likes to build resilient and
            scalable systems, dig deep into open source projects and show off
            the capabilities of the newest technologies
          </p>
          <p className="mb-4">
            I will be working at <span className="text-shopify">Shopify</span>{" "}
            in the summer and I&apos;m currently studying Computer Science and
            the University of Waterloo
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Recently</h3>
          <ul>
            <li className="flex items-start">
              <span className="text-gray-500 font-small mr-3 mt-0.5">—</span>
              <span>Studying Terraform&apos;s open source CLI</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 font-small mr-3 mt-0.5">—</span>
              <span>
                Learning system design and distributed systems architecture
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 font-small mr-3 mt-0.5">—</span>
              <span>Grinding Leetcode (a lot!!)</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 font-small mr-3 mt-0.5">—</span>
              <span>
                A tool that may or may not flood the internet with AI pollution.
                coming soon :)
              </span>
            </li>
          </ul>
        </section>
        <section>
          <SocialIcons />
        </section>
      </div>
    </div>
  );
};

export default Essentials;

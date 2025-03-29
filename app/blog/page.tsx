import React from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";

const BlogPage = () => {
  type BlogPost = {
    title: string;
    date: string;
    content: string;
    link: string;
  };

  const blogPosts: BlogPost[] = [
    {
      title: "Leetcode and what it taught me about discipline",
      date: "March 29, 2025",
      content:
        "Leetcoding is a necessary evil for software engineers. Here's how I'm trying to get better at it.",
      link: "/blog/leetcode-and-discipline",
    },
  ];
  return (
    <div className="min-h-screen bg-[#FAFBFA] text-gray-800 relative">
      <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
        <Navbar currentPage="blog" />

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog</h1>
          <p className="text-xl text-gray-600">
            reflections, learnings, and experiences
          </p>
        </header>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article className="border-b border-gray-200 pb-8">
              <Link href="/blog/my-journey-into-software-engineering">
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm mb-3">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <Link href="" className="text-theme hover:underline">
                Coming soon →
              </Link>
            </article>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <SocialIcons />
        </footer>
      </div>
    </div>
  );
};

export default BlogPage;

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
    complete: boolean;
  };

  const blogPosts: BlogPost[] = [
    {
      title: "Leetcode and what it taught me about discipline",
      date: "March 30, 2025",
      content:
        "Leetcode is a necessary evil for software engineers. Yet, behind the grind, there lies a deeper lesson in self-improvement and discipline",
      link: "/blog/leetcode-and-discipline",
      complete: true,
    },
    {
      title: "2025",
      date: "in the works",
      content: "What I will achieve in 2025",
      link: "/blog/2025",
      complete: false,
    },
  ];
  return (
    <div className="min-h-screen bg-bgtheme text-gray-800 relative">
      <div className="container mx-auto px-4 py-12 max-w-xl relative z-10">
        <Navbar currentPage="blog" />

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog</h1>
          <p className="text-xl text-gray-600">
            reflections, learnings, and experiences that I hope can inspire
            others
          </p>
        </header>

        <div className="space-y-8">
          {blogPosts.map((post, key) => (
            <article key={key} className="pb-8">
              <Link href={post.complete ? post.link : ""}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm mb-3">{post.date}</p>
              <p className="text-gray-700 text-md mb-4">{post.content}</p>
              <Link
                href={post.complete ? post.link : ""}
                className="text-theme inline-flex items-center group"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {post.complete ? "Read more" : "Coming soon"}
                </span>
                {post.complete && (
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                )}
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

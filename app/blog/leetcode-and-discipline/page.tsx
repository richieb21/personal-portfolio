import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFA] text-gray-800 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a6ada8 1px, transparent 2px)",
          backgroundSize: "30px 30px",
          opacity: 0.3,
        }}
      />

      <div className="container mx-auto px-4 py-12 max-w-2xl relative z-10">
        <Navbar currentPage="blog" />

        <Link
          href="/blog"
          className="text-blue-600 hover:underline mb-8 inline-block"
        >
          ← Back to all posts
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Leetcode and Discipline
            </h1>
            <div className="text-gray-500 text-sm">March 29, 2025</div>
          </header>

          <div className="space-y-6">
            <p>
              During my stay in Ottawa for coop, I found myself with an
              abundance of time.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Taking the leap of faith
            </h2>
            <p>
              This is the content of your first section. You can explain
              concepts, share experiences, or provide insights on the topic.
            </p>
            <p>
              You can add multiple paragraphs within each section to organize
              your thoughts and make the content more readable.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Second Section Heading
            </h2>
            <p>
              This is the content of your second section. Continue developing
              your ideas and providing valuable information to your readers.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can include bullet points</li>
              <li>To highlight key information</li>
              <li>Or list important items</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Third Section Heading
            </h2>
            <p>
              This is the content of your third section. You can include code
              snippets, images, or other media to enhance your blog post.
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>
                {`// Example code snippet
function example() {
  console.log("Hello, world!");
}`}
              </code>
            </pre>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
            <p>
              Summarize the main points of your blog post and provide any final
              thoughts or recommendations for your readers.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Share this post</h3>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/intent/tweet?text=My%20First%20Blog%20Post&url=https://yourdomain.com/blog/my-first-post"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://yourdomain.com/blog/my-first-post"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <SocialIcons />
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;

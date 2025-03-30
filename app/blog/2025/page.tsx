import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-bgtheme text-gray-800 relative">
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
              What I will do in 2025
            </h1>
            <div className="text-gray-500 text-sm">March 29, 2025</div>
          </header>

          <div className="space-y-6">
            <p>
              Every year I want to flush out my reflection on both the year
              before and my thoughts on the year ahead me.
            </p>

            <p>
              It was my first full year stepping into the adult world. I learnt
              what I got myself into with Computer Science
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Taking the leap of faith
            </h2>
            <p>
              I think what caused me to put off LeetCode for so long was seeing
              the mountain I had to climb. I remember in first year when I saw
              all upper years getting insane coops and talking about the number
              of Leetcodes they solved. They showed me the questions they were
              asked and I&apos;m not gonna lie, I was absolutely clueless.
            </p>
            <p>
              It felt like an uphill battle. I began to wish I was in their
              position, already knowing how to solve these problems and having
              confidence walking into technical interviews. The main point that
              shifted my mindset, however, was the fact that nobody was ever
              born an expert. The people I looked up to at one point were in my
              position. The only difference was that they{" "}
              <span className="underline bold">started</span>
            </p>
            <p>
              At one point, just like me, they decided that enough was enough.
              There was no use in wishing. The only way to get where they wanted
              to be was <span className="underline">to do</span>. There was only
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Staying Consistent
            </h2>
            <p>
              I think the idea of improving any aspect of your life can be
              boiled down to something much simpler. It&apos;s just showing up.
              And the thing is that Leetcode made is easy... too easy. With
              daily questions, company tagged questions and the Neetcode
              roadmap, there was genuinely no excuse for me not to be doing at
              least one a day.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can include bullet points</li>
              <li>To highlight key information</li>
              <li>Or list important items</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Third Section Heading
            </h2>

            <div className="mt-6">
              <iframe
                src="https://leetcard.jacoblin.cool/richieb21?theme=auto&font=changa&ext=activity"
                width="50%"
                height="275"
                frameBorder="0"
                loading="lazy"
                title="LeetCode Stats"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>

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

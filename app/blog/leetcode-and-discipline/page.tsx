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

      <div className="container mx-auto px-4 py-12 max-w-2xl relative z-10 text-lg">
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
            <div className="text-gray-500 text-md">March 30, 2025 | rb</div>
          </header>

          <div className="space-y-6">
            <p>
              Leetcode is a skill I promised myself I&apos;d be consistent with
              in 2025. Through this, I&apos;ve learnt so much about not only
              problem solving and DSA, but also a broader lesson about staying
              disciplined and keeping yourself accountable.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              The motivation behind it
            </h2>
            <p>
              During my stay in Ottawa for coop, I found myself with a lot of
              free time. But it felt different compared to when I was at school
              or home. There weren&apos;t as many people I could reach out to,
              not as many restaurants I could eat at (I miss good chinese food!)
              and frankly just not as much to do. Outside of work hours, after
              maybe eating with some friends or going to the gym,{" "}
              <span className="underline">I was bored.</span>
            </p>
            <p>
              Winter in Ottawa is pretty brutal too. I think for a month
              straight we had -20C weather with windchill and for the first time
              in my life I had to drive with gloves on (no heated steering wheel
              unfortunately). So that completely ruled out many outdoor
              activities except for the couple of times I went skiing.
              Regardless, I had a burning feeling that I needed to do something
              to improve one way or another.
            </p>
            <p>
              That&apos;s when I turned towards Leetcode. I knew it was
              something that I needed eventually if I wanted to achieve my
              personal career goals. I also just wanted to improve my critical
              thinking and problem solving skills by challenging my brain with
              something it wasn&apos;t used to.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Taking the leap of faith
            </h2>
            <p>
              I think what caused me to put off LeetCode for so long was seeing
              the mountain I had to climb. I remember in first year when I saw
              all upper years getting insane coops (Citadel, Databricks, etc!)
              and talking about the number of Leetcodes they solved. They showed
              me the questions they were asked (
              <a
                href="https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/description/"
                className="underline hover:text-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                like this 💔
              </a>
              ) and I&apos;m not gonna lie, I was absolutely clueless.
            </p>
            <p>
              It felt like an uphill battle. I began to wish I was in their
              position, already knowing how to solve these problems and having
              confidence walking into technical interviews. The main realization
              that shifted my mindset, however, was the fact that nobody was
              ever born an expert. The people I looked up to at one point were
              in my position. The only difference was that they{" "}
              <span className="underline bold">started</span>
            </p>
            <p>
              At one point, just like me, they decided that enough was enough.
              There was no use in wishing. The only way to get where they wanted
              to be was to <span className="underline">do</span>. That was the
              only way to get better. Day by day my progress may look minimal,
              but scoped over a couple months or a year,{" "}
              <span className="underline">
                I will have become the person I looked up to.
              </span>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              What it taught me about discipline
            </h2>
            <p>
              I think this idea -{" "}
              <span className="underline">
                showing up, staying consistent and letting results follow
              </span>{" "}
              - is applicable to any other part of my life. Want to get
              stronger? Stay discplined in the gym. Want to get better at
              soccer? Stay disciplined on the field. Want to be healthier? Stay
              disciplined in the kitchen. Frankly, these are all habits that
              I&apos;m still building but Leetcode definitely laid out a
              structured foundation to continue chipping away at these goals.
            </p>
            <p>
              On a related note, this brings me to the idea of{" "}
              <span className="text-theme">delayed gratification</span>, a topic
              discussed in{" "}
              <a
                href="https://jamesclear.com/atomic-habits"
                className="underline hover:text-theme"
              >
                Atomic Habits by James Clear
              </a>{" "}
              (as popular as it is, it is a great read). The book describes how
              habits worth building often fail because the costs are in the
              present while the rewards are in the future. Our brains{" "}
              <span className="italic text-theme">crave</span> dopamine. This is
              why the urge of eating something unhealthy oftentimes overpowers
              the discomfort of pushing yourself in the gym. Or the temptation
              of scrolling reels overpowers the boredom of studying. The book
              argues that the habits{" "}
              <span className="underline">worth building</span> are the ones
              that require embracing delayed gratification. The ones where
              staying discplined now will reap its rewards later even if D2D
              progress may seem minimal.
            </p>
            <p>
              Reflecting on this also brought another unusual and, at a surface
              level, unrelated connection to my mind.{" "}
              <span className="italic">Kinematics</span>. Remember in high
              school physics when you were learning about friction? Specifically
              static and kinetic friction? The idea that an object requires more
              force to start moving from rest (static) than it does to keep
              moving (kinetic) once it&apos;s already in motion. That concept
              struck me - not necessarily as a physics principle, but as a
              metaphor for <span className="underline">change</span>. Starting
              something new, whether a habit, project or mindset shift often
              feels disproportionately difficult at first. However, once you
              show up and start, you&apos;ve already fought 80% of the battle.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Staying consistent
            </h2>
            <p>
              I think the idea of improving any aspect of your life can be
              boiled down to something much simpler.{" "}
              <span className="underline">Just showing up</span>. And the thing
              is that Leetcode made it easy... too easy. With daily questions,
              company tagged questions and the Neetcode roadmap, there was no
              excuse for me not to be doing at least one a day. My goal was 3-5
              new questions, but at least 1 was non-negotiable.
            </p>
            <p>
              <a
                href="https://neetcode.io/"
                className="underline hover:text-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neetcode
              </a>{" "}
              helped a lot too. When I was initially learning, his content
              helped me unlock completely new sets of problems. His{" "}
              <a
                href="https://neetcode.io/roadmap"
                className="underline hover:text-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                roadmap
              </a>{" "}
              gave me direction whenever I felt lost or unsure of what to learn
              next. Without him, I might&apos;ve been doing DP before two
              pointer.
            </p>
            <p>
              The idea here was that in order to stay consistent, I had to make
              it easy for myself to do so. Whether it be a roadmap, doing the
              daily, randomly picking a tagged question from a company I love or
              doing the weekly contests, there was always a way for me to shut
              my brain off and pick a question to do. If staying consistent
              bridges you to your goals, you might as well make it{" "}
              <span className="underline">as easy as possible</span>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Results, Takeaways and TLDR
            </h2>
            <p>
              I&apos;m still in the middle of my journey. There are topics that
              I find profoundly unintuitive, questions I solved that need
              intense review and overall a long way to go in terms of my initial
              approaches. I found that I paradoxically felt{" "}
              <span className="underline">less</span> confident after 400+
              problems solved than when I was at 150. After my initial growth
              slowed I began to focus on what I was missing rather than what I
              was learning. I started to overthink the scope at what I might be
              asked in an interview. Whether I could &quot;one-shot&quot;
              certain problems rather than solve them through multiple trials
              and errors. These are all normal feelings I&apos;ve come to
              realize and that all that mattered is that I am a better
              programmer than I was yesterday.
            </p>
            <p>
              Leetcode has had its positive impacts too. Outside of code,
              it&apos;s made me a more consistent meal prepper and gym goer.
              It&apos;s allowed me to find like-minded friends who also decided
              to start something daunting. And the most important thing was that
              it made me <span className="underline">confident</span> as a
              programmer.
            </p>
            <p>
              After countless mock interviews with my friends and fellow
              engineers, I wanted to push myself and schedule a mock interview
              with <span className="text-theme">James Peralta</span> - a quickly
              growing Youtuber who focused on career development for SWEs (
              <a
                href="https://www.youtube.com/@jamesperaltaSWE/videos"
                className="underline hover:text-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                check him out!
              </a>
              ). The mock interview went well and I felt stood as a testament to
              my growth. Just 6 months ago I didn&apos;t know what sliding
              window was and 3 months ago you could probably run a kilometer
              before I could implement a basic matrix DFS. You can watch the
              mock interview on Youtube{" "}
              <a
                href="https://www.youtube.com/watch?v=RvbssHagzG4"
                className="underline hover:text-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                here!
              </a>{" "}
              &lt;-
            </p>
            <p>
              In the end, it wasn&apos;t just about solving Leetcode problems.
              Rather, it was about proving to myself that I could show up every
              day for something hard. That mindset bled into every part of my
              life and prompted reflection into self-improvement as a whole. And
              for that, I&apos;m grateful.
            </p>

            <div className="flex justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RvbssHagzG4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                className=""
              ></iframe>
            </div>

            <div className="mt-6 flex justify-center">
              <iframe
                src="https://leetcode-badge-sage.vercel.app/badge/richieb21?theme=light"
                width="70%"
                height="190"
                frameBorder="0"
                loading="lazy"
                title="LeetCode Stats"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold">TLDR</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Leetcode is hard, but its necessary</li>
              <li>
                No one was ever born an expert. To quote{" "}
                <span className="italic">
                  &quot;the master has failed more times than the apprentice has
                  tried&quot;
                </span>
              </li>
              <li>
                Delayed gratification can be your{" "}
                <span className="underline">worst enemy</span> or your{" "}
                <span className="underline">greatest asset</span>, those who
                conquer it will be the best at what they do
              </li>
              <li>
                Break up a long term goal into something manageable that you can
                work on daily. And make sure you show up
              </li>
              <li>
                Being consistent is often the hardest part. Make it easier for
                yourself by reducing the friction at becoming better at whatever
                you are developing
              </li>
            </ul>
          </div>

          <p className="mt-8">
            Thanks for reading :). This will be first of I hope many writing
            pieces I work on during my career. Through writing I hope to anchor
            some of the thoughts I have that I think are worth keeping and
            sharing and I hope they can provide value to others
          </p>
        </article>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <SocialIcons />
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;

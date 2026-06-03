"use client";

import Image from "next/image";
import { Search, MapPin, BriefcaseBusiness } from "lucide-react";

export default function Hero() {
  const tags = [
    "Product Designer",
    "AI Engineering",
    "DevOps Engineer",
  ];

  return (
    <section className="relative overflow-hidden bg-black mt-4 mb-16 rounded-2xl">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4338ca25,transparent_50%)]" />

      <div className="absolute left-1/2 top-[75%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[140px]" />

      <div className="container mx-auto px-4">
        <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center text-center">
          {/* Badge */}

          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
            
            <span className="font-semibold text-white">
              50,000+
            </span>

            <span className="uppercase tracking-widest text-gray-400">
              New Jobs This Month
            </span>
          </div>

          {/* Heading */}

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Find Your Dream Job Today
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            HireLoop connects top talent with world-class
            companies. Browse thousands of curated opportunities
            and land your next role — faster.
          </p>

          {/* Search Box */}

          <div className="mt-12 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              {/* Job Search */}

              <div className="flex flex-1 items-center gap-3 px-4">
                <Search className="h-5 w-5 text-gray-500" />

                <input
                  type="text"
                  placeholder="Job title, skill or company"
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                />
              </div>

              <div className="hidden h-8 w-px bg-white/10 md:block" />

              {/* Location */}

              <div className="flex flex-1 items-center gap-3 px-4">
                <MapPin className="h-5 w-5 text-gray-500" />

                <input
                  type="text"
                  placeholder="Location or Remote"
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                />
              </div>

              {/* Button */}

              <button className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-600 transition hover:bg-violet-700">
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Trending */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-gray-500">
              Trending Position
            </span>

            {tags.map((tag) => (
              <button
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Floating Glove */}

       
        </div>
      </div>
    </section>
  );
}
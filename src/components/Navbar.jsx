"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Browse Jobs",
      href: "/jobs",
    },
    {
      name: "Company",
      href: "/companies",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-3xl font-extrabold">
              <span className="text-sky-500">hire</span>
              <span className="text-orange-500">loop</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/auth/login"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Sign In
            </Link>

            <Link
              href="/auth/register"
              className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className="h-7 w-7 text-white" />
            ) : (
              <Menu className="h-7 w-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="space-y-5 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base text-gray-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4">
              <Link
                href="/auth/login"
                className="block text-base text-gray-300 hover:text-white"
              >
                Sign In
              </Link>

              <Link
                href="/auth/register"
                className="mt-4 block rounded-xl bg-violet-600 px-5 py-3 text-center font-medium text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
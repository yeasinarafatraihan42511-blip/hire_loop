import Link from "next/link";
import {
  LogoFacebook,
  LogoLinkedin,
  LogoGithub,
} from "@gravity-ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-4xl font-extrabold">
                <span className="text-sky-500">hire</span>
                <span className="text-orange-500">loop</span>
              </h2>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              The AI-native career platform. Built for people who
              take their work seriously.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <Link
                href="#"
                className="rounded-lg bg-zinc-900 p-3 transition hover:bg-zinc-800"
              >
                <LogoFacebook className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-zinc-900 p-3 transition hover:bg-zinc-800"
              >
                <LogoGithub className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-zinc-900 p-3 transition hover:bg-zinc-800"
              >
                <LogoLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 font-semibold text-indigo-400">
              Product
            </h3>

            <div className="space-y-4">
              <Link
                href="/jobs"
                className="block text-gray-400 transition hover:text-white"
              >
                Job Discovery
              </Link>

              <Link
                href="/ai"
                className="block text-gray-400 transition hover:text-white"
              >
                Worker AI
              </Link>

              <Link
                href="/companies"
                className="block text-gray-400 transition hover:text-white"
              >
                Companies
              </Link>

              <Link
                href="/salary"
                className="block text-gray-400 transition hover:text-white"
              >
                Salary Data
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 font-semibold text-indigo-400">
              Navigation
            </h3>

            <div className="space-y-4">
              <Link
                href="/help-center"
                className="block text-gray-400 transition hover:text-white"
              >
                Help Center
              </Link>

              <Link
                href="/career-library"
                className="block text-gray-400 transition hover:text-white"
              >
                Career Library
              </Link>

              <Link
                href="/contact"
                className="block text-gray-400 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 font-semibold text-indigo-400">
              Resources
            </h3>

            <div className="space-y-4">
              <Link
                href="/brand-guideline"
                className="block text-gray-400 transition hover:text-white"
              >
                Brand Guideline
              </Link>

              <Link
                href="/newsroom"
                className="block text-gray-400 transition hover:text-white"
              >
                Newsroom
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>Copyright © 2026 HireLoop. All rights reserved.</p>

          <div className="flex gap-6">
            <Link
              href="/terms"
              className="hover:text-white"
            >
              Terms & Policy
            </Link>

            <Link
              href="/privacy"
              className="hover:text-white"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
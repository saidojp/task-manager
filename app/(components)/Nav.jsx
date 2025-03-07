"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* Static background instead of animated gradient */}
      <div className="absolute inset-0 bg-dark-red-accent"></div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">TaskFlow</span>
            </Link>
          </div>

          {/* Actions: Theme Toggle, GitHub */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <a
              href="https://github.com/saidojp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHubLogoIcon className="w-5 h-5 mr-1.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

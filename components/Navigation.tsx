"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:opacity-70 transition-opacity">
                Good UX Skills
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/skills"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              技能庫
            </Link>
            <Link
              href="/getting-started"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              開始學習
            </Link>
            <Link
              href="/best-practices"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              最佳實踐
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              社群
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-6 py-6">
            <Link
              href="/skills"
              className="block rounded-md py-3 text-base font-medium text-gray-900 hover:text-gray-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              技能庫
            </Link>
            <Link
              href="/getting-started"
              className="block rounded-md py-3 text-base font-medium text-gray-900 hover:text-gray-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              開始學習
            </Link>
            <Link
              href="/best-practices"
              className="block rounded-md py-3 text-base font-medium text-gray-900 hover:text-gray-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              最佳實踐
            </Link>
            <Link
              href="/community"
              className="block rounded-md py-3 text-base font-medium text-gray-900 hover:text-gray-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              社群
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

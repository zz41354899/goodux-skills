"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Good UX Skills</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/skills"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              技能庫
            </Link>
            <Link
              href="/getting-started"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              開始學習
            </Link>
            <Link
              href="/best-practices"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              最佳實踐
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              社群
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-6 py-4">
            <Link
              href="/skills"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              技能庫
            </Link>
            <Link
              href="/getting-started"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              開始學習
            </Link>
            <Link
              href="/best-practices"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              最佳實踐
            </Link>
            <Link
              href="/community"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
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

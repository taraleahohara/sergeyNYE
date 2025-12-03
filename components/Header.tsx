"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-14 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Calendar
              className="h-6 w-6 text-lucky-red transition-colors"
            />
            <span
              className={`text-lg font-semibold transition-colors ${
                isScrolled ? "text-gray-900" : "text-gray-800"
              }`}
            >
              Sergey&apos;s NYE Bash
            </span>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdn0x85gageegBa4t9xiMy3eI4q1Dr2a0LtLm3aSfObNBMJUw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full font-medium text-black bg-transparent border-2 border-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            RSVP
          </a>
        </div>
      </div>
    </header>
  );
}


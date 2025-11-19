"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the dress code?",
    answer: "Lucky colors! Red, Green, or Gold.",
  },
  {
    question: "What should I bring?",
    answer: "BYOB, and don't forget your Horse figurine for the wish table!",
  },
  {
    question: "Can I bring a guest?",
    answer: "Please check with Sergey directly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Questions? 🤔
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-lucky-emerald/30 transition-colors duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-serif text-lg sm:text-xl font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


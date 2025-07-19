"use client"; // Required for useState

import { useState } from 'react';
import { faqs } from "@/lib/constants/info";

export default function FAQPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div>
      <section className="h-2/5 flex flex-col justify-center items-center snap-always snap-start bg-gradient-to-bl from-[#FC466B] to-[#3F5EFB]">
        <h1 className="text-4xl text-white font-bold">Question? Look here</h1>
        <span className="text-white">
          Couldn't find an answer?
          <a href="/contact_us" className="text-gray-50 font-semibold underline"> Contact us</a>
        </span>
      </section>

      <section className="min-h-full grid-cols-1 space-y-4 px-10 py-10 snap-always snap-start">
        <h1 className="text-2xl md:text-4xl text-secondary text-center">Frequently Asked Questions</h1>

        {faqs.map((item, index) => (
          <div className="faq" key={index}>
            <div
              className="bg-gray-200 min-h-20 flex items-center justify-between px-4 rounded-t-lg cursor-pointer"
              onClick={() => setActiveId(activeId === index ? null : index)}
            >
              <h1 className="text-sm md:text-lg font-medium hover:underline">
                {item.question}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-300 ${activeId === index ? 'rotate-45' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            {activeId === index && (
              <div className="bg-gray-50 p-4 rounded-b-md">
                <span>{item.description}</span>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

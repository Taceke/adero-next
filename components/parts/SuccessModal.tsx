"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type SuccessModalProps = {
  message: string;
  continueTo: string;
};

export default function SuccessModal({ message, continueTo }: SuccessModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow max-w-md w-full text-center p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2.5 right-2.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <span className="sr-only">Close modal</span>
          ✕
        </button>

        {/* Success Icon */}
        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Message */}
        <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{message}</p>

        {/* Continue Button */}
        <Link
          href={continueTo}
          className="inline-block py-2 px-4 text-sm font-medium text-white bg-primary hover:bg-primary-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Logo from "./_Logo"; // assumes _Logo.tsx exists in the same folder

export default function Footer1() {
  return (
    <footer className="bg-white snap-center snap-normal overflow-hidden">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        {/* Logo + Social Links */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">
            <Logo />
          </div>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            {/* Social Links */}
            {[
              {
                name: "Facebook",
                href: "#",
                svg: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.9V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46H15.7c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    />
                  </svg>
                ),
              },
              {
                name: "Instagram",
                href: "#",
                svg: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06...z"
                    />
                  </svg>
                ),
              },
              {
                name: "Twitter",
                href: "#",
                svg: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
                  </svg>
                ),
              },
              {
                name: "GitHub",
                href: "#",
                svg: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017..."
                    />
                  </svg>
                ),
              },
              {
                name: "Dribbble",
                href: "#",
                svg: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48..."
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.svg}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          {/* Services */}
          <div>
            <p className="font-medium text-gray-900">Services</p>
            <ul className="mt-6 space-y-4 text-sm">
              {["1on1 Coaching", "Company Review", "Accounts Review", "HR Consulting", "SEO Optimisation"].map(
                (service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-medium text-gray-900">Company</p>
            <ul className="mt-6 space-y-4 text-sm">
              {["About", "Meet the Team", "Accounts Review"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <p className="font-medium text-gray-900">Helpful Links</p>
            <ul className="mt-6 space-y-4 text-sm">
              {["Contact", "FAQs", "Live Chat"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}. AderoTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

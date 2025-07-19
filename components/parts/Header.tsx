"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./_Logo"; // Assuming _Logo.tsx exists
import ChooseService from "../../components/parts/ChooseService"; // Dropdown menu content

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "FAQ", link: "/faq" },
  { name: "Careers", link: "/career" },
];

const activeIndex = 0; // Update this dynamically if needed

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className="h-20 md:h-max bg-white flex flex-col items-stretch md:flex-row w-full md:border-b duration-500 border-black md:items-center md:justify-evenly sticky top-0 left-0 right-0 backdrop-blur-md z-40"
    >
      {/* Logo + Hamburger */}
      <div className="flex justify-between items-center md:w-min p-2">
        <Logo />
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          {!menuOpen ? (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden"
              id="header-menu-more"
            >
              <path
                d="M4.5 27V24H31.5V27H4.5ZM4.5 19.5V16.5H31.5V19.5H4.5ZM4.5 12V9H31.5V12H4.5Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              className="md:hidden"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="header-menu-less"
            >
              <path
                d="M28.5 7.5L7.5 28.5M7.5 7.5L28.5 28.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`p-4 ${
          menuOpen ? "flex" : "hidden"
        } md:flex text-start flex-col justify-start items-start md:flex-row gap-x-2 md:grow md:gap-x-10 md:ml-12 md:items-baseline md:justify-center space-y-2`}
      >
        {navItems.map((item, i) => {
          const isActive = i === activeIndex;
          const isService = i === 2;

          return (
            <li key={item.name} className={isService ? "group hover:cursor-pointer" : ""}>
              <Link
                href={item.link}
                className={`px-2 md:px-1 duration-300 ease-out ${
                  isActive && !isService ? "border-b-2 border-primary rounded-sm" : ""
                }`}
              >
                <span
                  className={`duration-300 ease-out ${
                    isActive && !isService
                      ? "text-primary"
                      : isService
                      ? "text-secondary font-medium group-hover:text-primary"
                      : "font-medium text-secondary hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isService && (
                    <svg
                      className="hidden md:inline group-hover:rotate-180 duration-500"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-primary"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.2366 18.7367C14.9084 19.0644 14.4636 19.2485 13.9999 19.2485C13.5361 19.2485 13.0913 19.0644 12.7632 18.7367L6.16222 12.138C5.83408 11.8097 5.64979 11.3645 5.6499 10.9004C5.65001 10.4362 5.83451 9.99109 6.1628 9.66295C6.49109 9.33481 6.93629 9.15053 7.40046 9.15063C7.86463 9.15074 8.30974 9.33524 8.63788 9.66353L13.9999 15.0255L19.3619 9.66353C19.6918 9.3446 20.1338 9.168 20.5926 9.17177C21.0515 9.17554 21.4905 9.35937 21.8151 9.68369C22.1397 10.008 22.324 10.4468 22.3282 10.9057C22.3324 11.3645 22.1562 11.8067 21.8376 12.1369L15.2377 18.7379L15.2366 18.7367Z"
                        fill="#023047"
                      />
                    </svg>
                  )}
                </span>
              </Link>

              {isService && <ChooseService />}
            </li>
          );
        })}
      </ul>

      {/* CTA Button */}
      <Link
        href="/contact_us"
        className="items-center ring-2 ring-primary rounded-lg px-4 py-1 font-bold text-primary md:text-lg hover:bg-primary duration-300 hover:text-white hover:scale-105 hidden lg:inline-flex mr-4"
      >
        Talk to us
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </header>
  );
}

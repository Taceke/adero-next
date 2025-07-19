"use client";
import Link from "next/link";

export default function ChooseService() {
  return (
    <div
      className="bg-white top-12 right-1/3 absolute drop-shadow-md rounded-2xl py-8 px-4 z-50 hidden md:group-hover:block duration-300 delay-500 ease-out"
      id="services-menu"
    >
      <ul className="space-y-4">
        <li className="hover:bg-gray-50 py-4 px-10 rounded-xl font-semibold text-gray-900 duration-300 ease-out">
          <Link
            href="/services/software-development"
            className="group flex items-center gap-4"
          >
            <div className="p-2 bg-gray-50 rounded-md group-hover:bg-white">
              <svg
                className="h-6 w-6 text-gray-600 group-hover:text-cyan-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M77.66 173.66a8 8 0 0 1-11.32-11.32L100.69 128L66.34 93.66a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32ZM192 176h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"
                />
              </svg>
            </div>
            software-development        
              </Link>
        </li>

        <li className="hover:bg-gray-50 py-4 px-10 rounded-xl font-semibold text-gray-900 duration-300 ease-out">
          <Link
            href="/services/education_consultancy"
            className="group flex items-center gap-4"
          >
            <div className="p-2 bg-gray-50 rounded-md group-hover:bg-white">
              <svg
                className="h-6 w-6 text-gray-600 group-hover:text-cyan-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778z"
                />
                <path
                  fill="currentColor"
                  d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"
                />
              </svg>
            </div>
            Education Consultancy
          </Link>
        </li>

        <li className="hover:bg-gray-50 py-4 px-10 rounded-xl font-semibold text-gray-900 duration-300 ease-out">
          <Link
            href="/services/training_and_courses"
            className="group flex items-center gap-4"
          >
            <div className="p-2 bg-gray-50 rounded-md group-hover:bg-white">
              <svg
                className="h-6 w-6 text-gray-600 group-hover:text-cyan-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
            </div>
            Training and Courses
          </Link>
        </li>

        {/* Add more items here if needed */}
      </ul>
    </div>
  );
}

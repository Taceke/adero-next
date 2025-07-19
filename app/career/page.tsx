// pages/career.js
import React from "react";
import Link from "next/link";
import Head from "next/head";

// Dummy data simulation for open_positions
const open_positions = [
  // Uncomment and add more items as needed
  // { id: 1, title: "frontend developer", job_type: "full time", mode: "remote" },
];

export default function CareerPage() {
  return (
    <>
      <Head>
        <title>Careers | AderoTech</title>
      </Head>

      <section className="flex justify-center items-center min-h-[40vh] snap-always snap-start bg-gradient-to-bl from-[#FC466B] to-[#3F5EFB]">
        <h1 className="text-4xl font-semibold text-white text-center">Work in AderoTech</h1>
      </section>

      <section className="p-6 flex flex-col justify-center items-center snap-always snap-start">
        {open_positions.length !== 0 && (
          <h1 className="text-4xl font-bold text-primary">Open positions</h1>
        )}
      </section>

      <section className="flex p-4 flex-col items-center justify-start space-y-4 px-10 snap-always snap-start">
        {/* If no open positions */}
        {open_positions.length === 0 ? (
          <h1 className="text-2xl md:text-4xl font-bold text-cyan-500 text-center py-12">
            No Open Positions Currently
          </h1>
        ) : (
          open_positions.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-xl shadow-gray-100 w-full border border-black max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md"
            >
              <div>
                <span className="text-primary text-sm">Engineering</span>
                <h3 className="text-secondary font-bold mt-px">
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="bg-cyan-100 text-primary rounded-full px-3 py-1 text-sm">
                    {item.job_type.charAt(0).toUpperCase() + item.job_type.slice(1)}
                  </span>
                  <span className="text-slate-600 text-sm flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {item.mode.charAt(0).toUpperCase() + item.mode.slice(1)}
                  </span>
                </div>
              </div>
              <div>
                <Link
                  href={`/apply_job/${item.id}`}
                  className="bg-primary text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
                >
                  Apply Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}

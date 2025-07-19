"use client";

import Link from "next/link";
import EduHowWeDoIt from "@/components/parts/EduHowDoIt";
import TopDestinations from "@/components/parts/TopDestinations";
import EduTestimonial from "@/components/parts/EduTestimonial";

export default function EducationConsultancyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="snap-center snap-always flex flex-col justify-evenly items-center text-center font-medium text-secondary bg-[url('/images/bg-straps.svg')] bg-no-repeat bg-cover h-full pt-24"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">
            Study your dream <span className="text-primary">Major</span> at your dream{" "}
            <span className="text-primary">Country</span>
          </h1>

          <p className="text-2xl">
            Let us take care of your worries with our{" "}
            <span className="underline text-primary">Expert Guidance</span>{" "}
            unlocking Limitless Possibilities.
          </p>
        </div>

        <Link
          href="/contact_us"
          className="bg-cyan-500 p-4 rounded text-white hover:scale-105 duration-300 mt-6"
        >
          Let Adero Help you
        </Link>
      </section>

      {/* Included Components */}
      <EduHowWeDoIt />
      <TopDestinations />
      <EduTestimonial />
    </main>
  );
}

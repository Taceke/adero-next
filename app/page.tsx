// app/page.tsx

import Services from "@/components/parts/Services";
import HowWeDoIt from "@/components/parts/_how_do_it";
import WhyChooseUs from "@/components/parts/WhyChooseUs";
import CallToAction from "@/components/parts/CallToAction";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="flex flex-col gap-10 md:gap-6 justify-center mt-14 text-center items-center h-screen bg-[url('/images/main_bg.svg')] bg-no-repeat bg-cover pt-4 snap-always snap-start"
      >
        <h1 className="text-4xl font-bold text-white">
          We Rise By Lifting Others
        </h1>
        <p className="text-2xl font-semibold text-white md:w-1/2">
          Through digital technology, we are here to address your issues on a
          global scale and improve your quality of life.
        </p>
        <a
          href="/contact_us"
          className="animate-bounce ring-1 ring-white hover:ring-2 hover:animate-none py-2 px-4 rounded-lg text-lg font-semibold text-white hover:scale-105 duration-500"
        >
          Contact Us
        </a>
      </section>

      {/* Include Component Parts */}
      <Services />
      <HowWeDoIt />
      <WhyChooseUs />

      {/* Call to Action Section */}
      <section className="snap-always snap-center">
        <CallToAction />
      </section>
    </>
  );
}

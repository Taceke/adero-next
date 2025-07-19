"use client";

import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/parts/CallToAction";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-bl from-[#FC466B] to-[#3F5EFB] snap-always snap-start">
        <h1 className="text-xl font-bold text-white z-30">About Us</h1>
        <h2 className="text-6xl font-bold text-center text-white">
          Who are we?
        </h2>
      </section>

      <section className="p-4">
        <h1 className="text-2xl text-cyan-500 font-bold">Our Mission</h1>
        <p className="md:max-w-1/2 md:text-2xl">
          With the use of digital technology, Aderoo Tech aims to simplify the
          lives of its clients and give them the best possible solution on the
          digital platform. This is one of the company's goals. As stated in our
          logo, we will help you navigate the digital world and secure internet
          access.
        </p>
      </section>

      <section className="bg-white snap-always snap-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h1 className="text-2xl text-gray font-bold mb-4">
            Meet Our Teams
          </h1>

          {/* Example team member (static) */}
          <div className="items-center bg-gray-50 rounded-lg shadow flex flex-col md:flex-row dark:bg-gray-800 dark:border-gray-700">
            <Image
              width={192}
              height={192}
              className="rounded-lg md:max-w-48 sm:rounded-none sm:rounded-l-lg"
              src="/images/yahya_abdala.jpg"
              alt="Aderoo Avatar"
            />
            <div className="p-5 grow">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Yahya Abdela
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Founder and CEO of AderoTech
              </span>
              <p className="hidden mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Lana drives the technical strategy of the flowbite platform and
                brand.
              </p>
              {/* Social icons omitted for brevity */}
            </div>
          </div>

          {/* Dynamically render additional team members if you integrate database */}
        </div>
      </section>

      <section className="overflow-hidden snap-always snap-center p-4 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/images/with_client.jpg"
                      alt="With Client"
                      width={500}
                      height={400}
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/images/adero_billboard.jpg"
                      alt="Adero Billboard"
                      width={500}
                      height={400}
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/images/IMG_1063.JPG"
                      alt="Office Image"
                      width={500}
                      height={400}
                      className="w-full rounded-2xl"
                    />
                    {/* Background pattern SVG omitted for brevity */}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-cyan-500">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  Why are we different?
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  We care about how happy you are with our service. So giving
                  you fair service and a world-class experience is the most
                  important thing to us.
                </p>
                <p className="hidden mb-8 text-base text-body-color dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <Link
                  href="/contact_us"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-cyan-500 bg-cyan-600 px-7 rounded-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    <CallToAction/>
    </main>
  );
}

// components/parts/HowWeDoIt.tsx

"use client";
"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


export default function HowWeDoIt() {
  const steps = [
    {
      title: "Identify what you need",
      description:
        "Capturing your need is our top priority. It's important you tell us what you expect in a clear and concise way so that we can give you the best solutions. For this reason, we will conduct free consulting services for you.",
    },
    {
      title: "Analyse and Plan",
      description:
        "We plan ahead of time development process to guarantee fast and reliable service.",
    },
    {
      title: "Design and Prototyping",
      description:
        "We will develop a full design and prototype of your software in a short time. This means you can give your comments early on before starting the development process.",
    },
    {
      title: "Development",
      description:
        "Fast and reliable development of your software will be guaranteed with excellent developers in our team.",
    },
  ];

  return (
    <section className="dark:text-gray-800 snap-always snap-center">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#219EBC]">
              <h3 className="text-cyan-500 text-3xl font-semibold">
                How we do it
              </h3>
              <span className="text-sm font-bold tracking-wider uppercase text-secondary">
                Check out our efficient way of development
              </span>
            </div>
          </div>

          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">

              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#219EBC]"
                >
                  <h3 className="text-xl font-semibold tracking-wide text-cyan-500">
                    {step.title}
                  </h3>
                  <p className="mt-3">{step.description}</p>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

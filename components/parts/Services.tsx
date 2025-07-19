// components/parts/parts/Services.tsx

"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Services() {
  // Ensure animations fire on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-28");
            entry.target.classList.add("animate-from-bottom");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".service-box").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Custom Softwares",
      description: "We build custom Software that fits your business needs.",
      image: "/images/switch.svg",
    },
    {
      title: "Mobile Applications",
      description: "We Design and Develop Android and IOS Applications",
      image: "/images/undraw_mobile_app.svg",
    },
    {
      title: "Web Applications",
      description: "We Design and Develop Responsive Websites and Web Applications",
      image: "/images/web_responsive.svg",
    },
    {
      title: "Graphic Designs",
      description: "We Design Websites, Applications, Logos and banners. We also do full Branding",
      image: "/images/web_responsive.svg",
    },
    {
      title: "Integrations",
      description: "We integrate third party services like SMS and Payment Systems into your system.",
      image: "/images/credit_card_payment.svg",
    },
    {
      title: "E-Commerce Solutions",
      description: "We Develop and integrate online shopping platforms into your system.",
      image: "/images/cart.svg",
    },
    {
      title: "Digital Marketing",
      description: "Get your business to larger audiences with our Marketing Solutions",
      image: "/images/undraw_digital_nomad.svg",
    },
    {
      title: "ERP Solutions",
      description: "We develop and integrate ERP solutions for any business size.",
      image: "/images/erp.svg",
    },
  ];

  return (
    <>
      {/* Top Section */}
      <section
        className="h-[72rem] w-full bg-indigo-500 lg:bg-white snap-normal flex flex-col bg-top-right justify-start pt-40 md:pt-64 snap-end bg-[url('/images/modified_bg.svg')] bg-no-repeat bg-indigo-900"
      >
        <div className="flex flex-col justify-start items-center gap-4 p-4">
          <h1 className="text-center text-2xl font-bold text-white lg:text-black md:h-1/2">
            Excellent Software Development Services at your disposal
          </h1>
          <button className="hidden text-lg font-bold hover:ring-1 hover:scale-105 hover:bg-white hover:text-primary duration-300 ring-primary bg-primary text-white px-4 py-1 rounded-lg">
            Get started
          </button>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="snap-normal snap-end px-4 relative -top-[52rem] md:-top-[48rem]">
        <div className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-box flex flex-col items-center justify-between max-w-96 rounded-2xl bg-white shadow-xl p-4 py-12 hover:scale-105 duration-300 ease-out opacity-0 translate-y-28"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={200}
                className="h-36 w-auto object-contain"
              />
              <h1 className="text-lg font-medium text-secondary mt-4">{service.title}</h1>
              <p className="text-sm text-center mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

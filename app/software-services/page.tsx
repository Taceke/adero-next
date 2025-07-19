import HowWeDoIt from "@/components/parts/_how_do_it";
import CallToAction from "@/components/parts/CallToAction";

const services = [
  {
    service: "Custom Software",
    description: "We build tailored software solutions for your unique business needs.",
    link: "/services/custom-software",
  },
  {
    service: "Enterprise Apps",
    description: "Robust enterprise-grade applications built to scale.",
    link: "/services/enterprise-apps",
  },
  {
    service: "Web Applications",
    description: "Modern web applications with responsive design and functionality.",
    link: "/services/web-apps",
  },
  {
    service: "Mobile Applications",
    description: "Cross-platform apps for iOS and Android.",
    link: "/services/mobile-apps",
  },
  {
    service: "SaaS Platforms",
    description: "We help you build and launch your SaaS product efficiently.",
    link: "/services/saas",
  },
  {
    service: "API Development",
    description: "Powerful and secure APIs for your apps and third-party integrations.",
    link: "/services/api-development",
  },
];

export default function SoftwareServicesPage() {
  return (
    <main className="pt-24">
      {/* Services Section */}
      <section className="flex flex-col items-center snap-always snap-center">
        <h1 className="text-2xl text-center text-secondary font-bold mx-4 md:text-4xl">
          Our <span className="underline text-primary">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 w-screen justify-around p-6">
          {services.map((service) => (
            <div
              key={service.link}
              className="max-w-sm flex flex-col justify-around border border-gray-200 rounded-lg shadow hover:scale-105 duration-700 ease-out animate-from-bottom opacity-0 translate-y-28"
            >
              <a href={service.link}>
                <div className="p-5 grow flex flex-col items-start justify-evenly">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
                    {service.service}
                  </h5>
                  <p className="mb-3 font-normal text-secondary">{service.description}</p>
                  <a
                    href={service.link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
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
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How We Do It Section */}
      <HowWeDoIt />

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}

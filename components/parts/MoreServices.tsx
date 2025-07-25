
"use client";

type Service = {
  service: string;
  description: string;
  icon?: string; // optional image path if you have icons
};

export default function MoreServices({ services }: { services: Service[] }) {
  return (
    <section className="flex flex-col items-center snap-always snap-center">
      <h1 className="text-2xl text-center font-bold mx-4 md:text-4xl">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 w-screen justify-around p-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="max-w-sm flex flex-col bg-secondary justify-around border border-gray-200 rounded-lg shadow hover:scale-105 duration-500 ease-out"
          >
            {/* If you have service.icon paths, uncomment this */}
            {/* <a href="#" className="hidden">
              <img
                className="size-28 rounded-t-lg"
                src={service.icon}
                alt="service image"
              />
            </a> */}

            <div className="p-5 grow flex flex-col items-start justify-evenly">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.service}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
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
          </div>
        ))}
      </div>
    </section>
  );
}

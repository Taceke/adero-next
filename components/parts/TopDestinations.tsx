import Image from "next/image";
import Link from "next/link";

export default function TopDestinations() {
  return (
    <section className="w-screen flex flex-col gap-4 items-center snap-always snap-center text-center">
      <div className="text-center mt-6">
        <h1 className="font-medium text-4xl">
          Top <span className="underline">Destinations</span>
        </h1>
        <p>Choose from top destinations for our students</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mt-6 mb-6 justify-center">
        {[
          { name: "USA", src: "/images/united-states.png" },
          { name: "Canada", src: "/images/canadian-flag.jfif" },
          { name: "Australia", src: "/images/australian-flag.jfif" },
          { name: "UK", src: "/images/uk-flag.jfif" },
        ].map((country) => (
          <div
            key={country.name}
            className="border border-black p-4 rounded-lg flex flex-col items-center"
          >
            <Image
              src={country.src}
              alt={`${country.name} flag`}
              width={192}
              height={192}
              className="w-48 h-48 object-contain rounded-full"
            />
            <h1 className="font-medium text-center mt-2">{country.name}</h1>
          </div>
        ))}
      </div>

      <Link href="/contact_us" className="bg-cyan-500 text-white mt-12 rounded p-4">
        Let's talk
      </Link>
    </section>
  );
}

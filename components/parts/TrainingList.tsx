import Link from "next/link";

const trainings = [
  {
    title: "Full Stack Web Development",
    description: "Learn frontend and backend development using JavaScript, React, Node.js, and databases.",
    link: "/contact_us",
  },
  {
    title: "UI/UX Design",
    description: "Master the principles of user experience and interface design using Figma and prototyping tools.",
    link: "/contact_us",
  },
  {
    title: "Mobile App Development",
    description: "Build cross-platform apps with React Native or Flutter and deploy them to app stores.",
    link: "/contact_us",
  },
];

export default function TrainingList() {
  return (
    <section className="snap-always snap-center p-6 bg-gray-50 text-secondary">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">
          Our <span className="text-primary underline">Training Programs</span>
        </h2>
        <p className="text-lg">Empowering you with career-ready skills</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold text-primary mb-2">{training.title}</h3>
            <p className="mb-4">{training.description}</p>
            <Link
              href={training.link}
              className="text-white bg-primary px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

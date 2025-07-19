export default function Testimonials() {
  const testimonials = [
    {
      name: "Bonnie Green",
      position: "Developer at Open AI",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      title: "Very easy this was to integrate",
      text: 'If you care for your time, I hands down would go with this."',
    },
    {
      name: "Bonnie Green",
      position: "Developer at Open AI",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      title: "Very easy this was to integrate",
      text: 'If you care for your time, I hands down would go with this."',
    },
    {
      name: "Bonnie Green",
      position: "Developer at Open AI",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      title: "Very easy this was to integrate",
      text: 'If you care for your time, I hands down would go with this."',
    },
    {
      name: "Bonnie Green",
      position: "Developer at Open AI",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      title: "Very easy this was to integrate",
      text: 'If you care for your time, I hands down would go with this."',
    },
    {
      name: "Bonnie Green",
      position: "Developer at Open AI",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      title: "Very easy this was to integrate",
      text: 'If you care for your time, I hands down would go with this."',
    },
  ];

  return (
    <section className="hidden md:flex flex-col justify-between gap-6 snap-always snap-start p-4">
      <h1 className="text-xl text-center font-medium text-secondary">TESTIMONIALS</h1>
      <h2 className="text-gray-800 text-3xl font-bold text-center">
        What our happy clients say?
      </h2>

      <div className="flex overflow-x-scroll snap-x snap-mandatory gap-4 rounded-lg shadow-sm no-scrollbar">
        {testimonials.map((item, index) => (
          <figure
            key={index}
            className="flex flex-col snap-center snap-start min-w-96 flex-nowrap items-center justify-center p-8 text-center bg-secondary border-b border-gray-200 rounded-lg"
          >
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="my-4">{item.text}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <img
                className="rounded-full w-9 h-9"
                src={item.image}
                alt={item.name}
              />
              <div className="space-y-0.5 font-medium text-left ms-3">
                <div>{item.name}</div>
                <div className="text-sm text-gray-500">{item.position}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

import YoutubeEmbed from "./YoutubeEmbed";

export default function EduTestimonial() {
  const videoIds = [
    "MJhBoxrlgg8", // Example video IDs
    "dQw4w9WgXcQ",
    "eN6AYHAT8zE"
  ];

  return (
    <>
      {/* Student Testimonials Section */}
      <section className="snap-always snap-center p-4">
        <div className="text-center mb-8">
          <h1 className="font-medium text-4xl">
            Our students visa <span className="underline text-cyan-500">Success</span>
          </h1>
          <p>See what others say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-6 justify-center justify-items-center">
          {videoIds.map((id) => (
            <YoutubeEmbed key={id} videoId={id} />
          ))}
        </div>
      </section>

      {/* Training Programs Section */}
    </>
  );
}

type Props = {
  videoId: string;
};

export default function YoutubeEmbed({ videoId }: Props) {
  return (
    <iframe
      className="w-[315px] h-[560px] md:w-full md:h-[315px] rounded-lg shadow-lg"
      src={`https://www.youtube.com/embed/${videoId}?feature=share`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

import { ReactNode } from "react";
import Header from "./header";
import Video from "./video";
import Image from "next/image";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video?: string;
  src?: string;
  alt?: string;
  credits: string;
  active: boolean;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  _logo,
  title,
  tag,
  video,
  _credits,
  src,
  alt,
  active,
}) => {
  return (
    <div className="link w-full h-full bg-secondary-background border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2 ">
      {/* Header */}
      <Header title={title} tag={tag} />
      {/* Body */}
      <div className="relative flex float-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
        {/* Video */}
        <Video video={video} active={active} />
        {/* Image */}
        <Image
          src={src}
          alt={alt}
          className="object-cover w-full h-full rounded-3xl"
          active={active}
        />
      </div>
    </div>
  );
};

export default FeaturedCard;

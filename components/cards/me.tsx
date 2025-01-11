import Image from "next/image";
import { cn } from "@/lib/utils";
import Card from "../ui/card";
import MyImg from "@/public/assets/images/gallery/img-3.jpeg";
import Flag from "@/public/assets/images/gallery/flag.png";

export default function MeCard() {
  return (
    <Card className="2xl:h-full">
      <div className="w-full  h-[400px] sm:h-[500px] overflow-hidden">
        {/*Background image */}
        <Image
          src={MyImg}
          alt="erhan baydi"
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
        />
        {/*Tags */}
        <div className="absolute top-[65%] space-y-2">
          <Tag
            text="Hello, universe 👋"
            className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="I'm ERHAN BAYDI"
            className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="Full Stack Developer"
            className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <div className="flex items-center space-x-2">
            <Tag
              text="Live in UK "
              className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
            />
            <Image src={Flag} alt="flag" className="ml-2 w-8 h-8" />
          </div>
        </div>
      </div>
    </Card>
  );
}

const Tag = ({ text, className }: { text: string; className: string }) => {
  return (
    <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3", className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
};

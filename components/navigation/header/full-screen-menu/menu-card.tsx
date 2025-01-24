import { HeadingAnimatedSvg } from "@/components/heading/heading-animated-svg";
import Link from "next/link";

export default function MenuCard() {
  return (
    <div className="w-full h-auto min-h-[427px] gap-[70px] bg-[#1e36ea] rounded-[10px] flex-col justify-between items-start flex relative overflow-hidden pt-10 px-[25px] pb-5 shadow-md ">
      {/*Header*/}
      <div className="w-full flex relative justify-between items-center">
        <div className="uppercase font-bold text-2xl text-white">
          Who is ERHAN
        </div>
        <HeadingAnimatedSvg animated text="LEARN MORE ABOUT ERHAN BAYDI" />
      </div>
      {/*Menu*/}
      <div className="z-40 w-full flex flex-col gap-y-[5px] justify-center items-strat relative ">
        {myLinks.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className="text-[#fdf825] uppercase text-[52px] font-bold leading-[85%] transition-colors duration-75 hover:text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

const myLinks = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Background",
    link: "#about",
  },
  {
    title: "EXPERIENCE",
    link: "#about",
  },
  {
    title: "EDUCATION",
    link: "#about",
  },
  {
    title: "CERTIFICATIONS",
    link: "#about",
  },
  {
    title: "TECH STACK",
    link: "#about",
  },
];

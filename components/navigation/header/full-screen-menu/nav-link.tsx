"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { slide, scale } from "./animation";
import Link from "next/link";

interface NavLinksProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
}

const NavLink: FC<NavLinksProps> = ({ data }) => {
  const { title, href, index } = data;
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={slide}
      initial="initial"
      custom={index}
      className="relative flex items-center "
      animate="enter"
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        variants={scale}
        animate={hovered ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-white rounded-full absolute -left-[30px] pointer-events-none z-10"
      ></motion.div>
      <Link
        href={href}
        className="text-[6vw] uppercase leading-[96%] font-bold z-20 relative"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;

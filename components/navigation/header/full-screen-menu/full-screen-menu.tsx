"use client";
import { motion } from "framer-motion";
import { menuSlide } from "./animation";
import Profile from "@/components/ui/profile";
import NavLink from "./nav-link";
import Link from "next/link";

export default function FullScreenMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
    >
      {/* Profile */}
      <div className="relative w-full max-w-[95%] mx-auto ">
        <div className="absolute top-8">
          <Profile />
        </div>
      </div>

      {/* Menu and card */}
      <div className="absolute bottom-32 w-full lg:pl-[5%]">
        <div
          className="grid relative"
          style={{ gridTemplateColumns: "1fr 500px" }}
        >
          <div className="pl-4 flex flex-col justify-end">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index, href: item.href }} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-[95%] pl-[5%] absolute bottom-8 ">
        <div className="flex flex-wrap items-center justify-between uppercase text-white">
          {/* ---------Left------------- */}
          <div className="flex items-center gap-4">
            <Link href="/">LEGAL NOTICE</Link>
            <Link href="/">404</Link>
            <Link href="/">LEGAL STYLE</Link>
          </div>
          {/* ---------Middle------------- */}
          <div className="flex items-center gap-4">
            <Link href="/">LINKEDLN</Link>
            <Link href="/">GITHUB</Link>
          </div>
          {/* ---------Right------------- */}
          <div className="flex items-center gap-4">
            <Link href="/">©2024</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const navItems = [
  { title: "Home", href: "#home" },
  { title: "Featured", href: "#featured" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

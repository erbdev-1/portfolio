import Image from "next/image";
import Card from "../ui/card";
import SignatureImg from "@/public/assets/images/gallery/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/social";

export default function ResumeCard() {
  return (
    <Card className="md:h-full ">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        I thrive on solving complex problems with clean, efficient code. Each
        project is an opportunity to craft something that`s not just functional,
        but intuitive and enjoyable to use. My background in business gives me
        insight into how technology can deliver real value for users and
        stakeholders alike.🚀💻
      </p>
      {/* Signature */}
      <div>
        <Image src={SignatureImg} alt="erhan baydi" />
      </div>
      {/* Social and resume button */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* Social */}
        <Socials />
        <Button>
          <FaDownload /> Resume
        </Button>
      </div>
    </Card>
  );
}

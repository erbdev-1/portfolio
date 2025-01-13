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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
        consequatur corporis doloribus nobis modi numquam? Vitae sit nobis,
        reiciendis officia eaque eos. Suscipit sunt consectetur voluptatum fugit
        eius libero. Totam ab facilis sit quas provident voluptas esse numquam a
        placeat, laborum error eum nulla aspernatur incidunt saepe repudiandae
        nisi molestias.🚀💻
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

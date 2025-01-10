import Image from "next/image";
import MyImage from "@/public/assets/images/me/me.jpeg";

export default function Profile() {
  return (
    <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
      {/* Photo */}
      <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol ">
        <Image
          src={MyImage}
          alt="Erhan baydi photo"
          className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover "
        />
        {/* Online */}
        <div className="absolute  w-3 h-3 bg-green-benzol border-2 border-blue-cosmos rounded-full right-0 bottom-5"></div>
      </div>
      {/* Name*/}
      <div className="text-3xl font-medium">ERHAN BAYDI</div>
    </div>
  );
}

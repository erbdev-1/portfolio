"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import LandingSection from "@/sections/landing";
// import Button from "@/components/ui/button";
// import Card from "@/components/ui/card";
// import Input from "@/components/ui/input";
// import { FaArrowRight, FaUser } from "react-icons/fa";
// import { GoHomeFill } from "react-icons/go";
// import TextArea from "@/components/ui/text-area";
// import Profile from "@/components/ui/profile";
// import FancyButton from "@/components/ui/fancy-button";
// import LiveClock from "@/components/ui/live-clock";
// import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
// import ScrollDown from "@/components/ui/scroll-down";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div>
          <LandingSection />
        </div>
      )}

      {/* {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="UI Components">
              <div className="grid grid-cols-4">
                <Button>Basic Button</Button>
                <Button>
                  <GoHomeFill />
                  Basic Buttn
                </Button>
                <Button isIcon>
                  <FaUser />
                </Button>
                <Button link="https://google.com"> Google</Button>
              </div>
              <Input type="text" placeholder="Enter your name" />
              <Input
                type="text"
                placeholder="Enter your name"
                icon={<FaUser />}
              />
              <TextArea placeholder="Enter your message" />
              <Profile />
              <MagneticWrapper className="w-[350px]">
                <FancyButton text="Contact Me" icon={<FaArrowRight />} />
              </MagneticWrapper>
              <LiveClock timeZone="United Kingdom /London" />
              <MagneticWrapper>
                <ScrollDown />
              </MagneticWrapper>
            </Card>
          </div>
        </div>
      )} */}
    </WaterWaveWrapper>
  );
}

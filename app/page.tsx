"use client";

import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import FeaturedSection from "@/sections/featured";
import LandingSection from "@/sections/landing";
import dynamic from "next/dynamic";

//Dynamic import WaterWaveWrapper to ensure that the component is only loaded on the client side.
const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/water-wave-wrapper"),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          <LandingSection />
          <FeaturedSection id="featured" />
          <AboutSection id="about" />
          <ContactSection id="contact" />
        </div>
      )}
    </WaterWaveWrapper>
  );
}

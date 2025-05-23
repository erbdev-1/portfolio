import AdditionalCard from "@/components/cards/additional";
import BackgroundCard from "@/components/cards/background";
import CertificationsCard from "@/components/cards/certifications";
import EducationCard from "@/components/cards/education";
import ExperienceCard from "@/components/cards/experience";
import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import StackCard from "@/components/cards/stack";
import Heading from "@/components/heading/heading";
import Gallery from "@/components/ui/gallery";

interface AboutSectionProps {
  id: string;
}

export default function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id="about" className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8 ">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 ms:space-y-0 2xl:grid-cols-3">
          {/*Me Card */}
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <div title="Gallery" className="2xl:hidden">
            <Gallery />
          </div>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 ms:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <EducationCard />
            <CertificationsCard />
            <AdditionalCard />
          </div>
          <div className="space-y-4">
            <StackCard />
            <ExperienceCard />
            {/* <Card title="Education">Education</Card> */}
          </div>
          <div className="hidden 2xl:flex">
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
}

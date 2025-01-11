import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8 ">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 ms:space-y-0 2xl:grid-cols-3">
          {/*Me Card */}
          <MeCard />
          <ResumeCard />
          <Card title="Background">Background</Card>
          <Card title="Gallery" className="2xl:hidden">
            Gallery
          </Card>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 ms:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <Card title="Instructor">Instructor</Card>
            <Card title="Certifications">Certifications</Card>
          </div>
          <div className="space-y-4">
            <Card title="My Tech Stack"> Stack</Card>
            <Card title="Experience">Experience</Card>
            <Card title="Education">Education</Card>
          </div>
          <div className="hidden 2xl:flex">
            <Card title="Gallery">Gallery</Card>
          </div>
        </div>
      </div>
    </div>
  );
}

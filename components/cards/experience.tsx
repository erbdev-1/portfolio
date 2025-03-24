import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {ExperienceData.map((exp, i) => (
          <TimelineItem
            key={i}
            date={exp.date}
            title={exp.title}
            subTitle={exp.subTitle}
            link={exp.link}
            tag={exp.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const ExperienceData = [
  {
    date: "2024-2025 ",
    title: "Full-Stack Developer",
    subTitle: "Turkcell  ",
    link: "https://gelecegiyazanlar.turkcell.com.tr/",
    tag: "Remote",
  },
  {
    date: "2024 - 2025",
    title: "Contributor",
    subTitle: "Scott Polar Research Institute  ",
    link: " https://github.com/erbdev-1/heat-watchers",
    tag: "Remote",
  },

  {
    date: "2022-2023 ",
    title: "Frontend Developer",
    subTitle: "ATBS Abkanttechnik Braunschweig GmbH ",
    link: "https://www.atbs.de/",
  },
  {
    date: "2015-2022  ",
    title: "Co-founder ",
    subTitle: "Verantech Llc  ",
    link: "/",
  },
  {
    date: "2014-2016   ",
    title: "Country Manager  ",
    subTitle: "Baris Tente Llc   ",
    link: "/",
  },
  {
    date: "2013-2014  ",
    title: "Frontend Developer  ",
    subTitle: "Emotion Swd  ",
    link: "/",
  },
  {
    date: "2012-2013   ",
    title: "Software Engineer Intern  ",
    subTitle: "LUXSOFT  ",
    link: "/",
  },
];

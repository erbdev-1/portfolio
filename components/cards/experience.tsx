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
    date: "2020-2021",
    title: "Frontend Developer",
    subTitle: "Company ",
    link: "/a",
    tag: "Remote",
  },
  {
    date: "2020-2021",
    title: "Frontend Developer",
    subTitle: "Company ",
    link: "/a",
    tag: "Remote",
  },

  {
    date: "2020-2021",
    title: "Frontend Developer",
    subTitle: "Company ",
    link: "/a",
    tag: "Remote",
  },
];

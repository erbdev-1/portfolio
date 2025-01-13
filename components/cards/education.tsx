import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {EducationData.map((exp, i) => (
          <TimelineItem
            key={i}
            date={exp.date}
            title={exp.title}
            subTitle={exp.subTitle}
            link={exp.link}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const EducationData = [
  {
    date: "2020-2021",
    title: "Frontend Developer",
    subTitle: "Company ",
    link: "/a",
  },
  {
    date: "2020-2021",
    title: "Frontend Developer",
    subTitle: "Company ",
    link: "/a",
  },

  {
    date: "2020-2021",
    title: "Frontend Developer",
    subTitle: "Company ",
    link: "/a",
  },
];

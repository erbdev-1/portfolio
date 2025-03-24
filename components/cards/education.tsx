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
    date: "2007-2012",
    title: "National Technical University of Ukraine ",
    subTitle: "Computer Engineering ",
    link: "https://kpi.ua/en",
  },
];

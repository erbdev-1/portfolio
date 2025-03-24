import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function AdditionalCard() {
  return (
    <Card title="My Additional Experience">
      <Timeline>
        {AdditionalData.map((exp, i) => (
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

const AdditionalData = [
  {
    date: "2009-2012  ",
    title: "President",
    subTitle: "International Turkish Ukraine Students Association (UTUOD)  ",
    link: "/",
  },
  {
    date: "2010 - 2010",
    title: "Work and Travel USA Program ",
    subTitle: "United States  ",
    link: " /",
  },
];

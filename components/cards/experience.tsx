import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        <TimelineItem
          date="2020-2021"
          title="Frontend Developer"
          subTitle="Company "
          link="/a"
          tag="new"
        />
        <span>b</span>
      </Timeline>
    </Card>
  );
}

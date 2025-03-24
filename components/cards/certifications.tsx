import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function CertificationsCard() {
  return (
    <Card title="My Certifications">
      <Timeline>
        {CertificationsData.map((exp, i) => (
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

const CertificationsData = [
  {
    date: "2023",
    title: "Full Stack MERN Development Bootcamp ",
    subTitle: "Tech Educators  ",
    link: "https://techeducators.co.uk/",
  },
  {
    date: "2024",
    title: "Full Stack Engineer  ",
    subTitle: "Codecademy ",
    link: "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path",
  },

  {
    date: "2022-2024",
    title: "Advanced React and Redux ",
    subTitle: "Udemy ",
    link: "/a",
  },
  {
    date: "2022-2024",
    title: "Complete Next.js Developer ",
    subTitle: "Udemy ",
    link: "/a",
  },
  {
    date: "2022-2024",
    title: "MongoDB - The Complete Developer's Guide ",
    subTitle: "Udemy ",
    link: "/a",
  },
];

import Card from "../ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          I am a full stack developer with a passion for web development. I have
          experience in building web applications and websites. I have worked
          with various technologies and frameworks such as React.js, Next.js,
          Node.js, Express.js, MongoDB, and TypeScript. I have experience in
          building RESTful APIs and implementing authentication systems using
          JWT. My journey began at LUXSOFT in Kyiv as a Software Engineer
          Intern, where I developed responsive interfaces with JavaScript and
          HTML/CSS. I advanced to Frontend Developer roles at EMOTION SWD and
          later at ATBS Abkanttechnik in Germany, where I created React.js
          components for management dashboards while gaining exposure to backend
          technologies. Most recently, I've worked as a Full-Stack Developer for
          Turkcell's Geleceği Yazanlar platform, developing dynamic web
          applications with Next.js and implementing state management with Redux
          Toolkit. I've also contributed to research projects at Cambridge
          University's Scott Polar Research Institute, creating data
          visualization tools. I have experience working with Git/GitHub for
          version control, Tailwind CSS for styling, and Vercel for deployment.
          My background as an entrepreneur and country manager in Ukraine has
          given me unique insights into business needs and client relationships.
          I'm proficient in responsive design principles and have implemented
          cross-browser compatible solutions throughout my career. I hold a
          Bachelor`s Degree in Computer Engineering and have completed intensive
          training programs including a Full Stack MERN Development Bootcamp.
          <span className="text-white underline">
            I am a quick learner and always eager to learn new things.
          </span>{" "}
          My diverse international experience has shaped me into a resilient,
          adaptable developer who brings both technical expertise and business
          acumen to every project.
        </p>
        <br />
      </div>
    </Card>
  );
}

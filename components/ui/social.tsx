import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "./button";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-13 h-13 grid place-items-center">
            {social.icon}
          </span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaLinkedin className="w-7 h-7" />,
    link: "https://www.linkedin.com",
    username: "erhanbaydi",
  },
  {
    icon: <FaGithub className="w-7 h-7" />,
    link: "https://www.github.com",
    username: "erhanbaydi",
  },
];

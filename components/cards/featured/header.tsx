import { FC } from "react";

interface HeaderProps {
  title: string;
  tag: string;
  link: string;
}

const Header: FC<HeaderProps> = ({ title, tag, link }) => {
  return (
    <div className="bg-secondary-background flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 border border-border rounded-3xl">
      {/* Title */}
      <div>
        <p className="text-lg font-medium leading-3 text-primary-foreground">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-primary hover:underline"
          >
            {title}
          </a>
        </p>
      </div>
      {/* Tag */}
      <div>
        <p className="text-lg font-medium leading-3 font-pixel text-secondary-foreground">
          {tag}
        </p>
      </div>
    </div>
  );
};

export default Header;

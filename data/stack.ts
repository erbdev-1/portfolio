import HtmlImg from "../public/assets/images/stack/html.png";
import CssImg from "../public/assets/images/stack/css.png";
import JsImg from "../public/assets/images/stack/js.png";
import TypescriptImg from "../public/assets/images/stack/typescript.png";
import ReactImg from "../public/assets/images/stack/react.png";
import NextImg from "../public/assets/images/stack/nextjs.png";
import ReduxImg from "../public/assets/images/stack/redux.png";
import SassImg from "../public/assets/images/stack/sass.png";
import TailwindImg from "../public/assets/images/stack/tailwind.png";
import ShadcnUiImg from "../public/assets/images/stack/shadcn-ui.png";
import AntDesignImg from "../public/assets/images/stack/antdesign.png";
import NodeImg from "../public/assets/images/stack/nodejs.png";
import ExpressImg from "../public/assets/images/stack/express.png";
import MongoImg from "../public/assets/images/stack/mongodb.png";
import FirebaseImg from "../public/assets/images/stack/firebase.png";
import PrismaImg from "../public/assets/images/stack/prisma.png";
import VercelImg from "../public/assets/images/stack/vercel.png";
import GitHubImg from "../public/assets/images/stack/github.png";

export const stackData = [
  {
    title: "Basics",
    stack: [
      { id: 0, title: "HTML 5", image: HtmlImg, bgColor: "" },
      { id: 1, title: "CSS 3", image: CssImg, bgColor: "" },
      { id: 2, title: "Javascript", image: JsImg, bgColor: "" },
      { id: 3, title: "Typescript", image: TypescriptImg, bgColor: "" },
    ],
  },
  {
    title: "Frontend FWs",
    stack: [
      { id: 0, title: "React JS", image: ReactImg, bgColor: "" },
      { id: 1, title: "Next JS", image: NextImg, bgColor: "" },
      { id: 1, title: "Redux", image: ReduxImg, bgColor: "" },
    ],
  },

  {
    title: "Styling /FWs",
    stack: [
      { id: 0, title: "Sass", image: SassImg, bgColor: "" },
      { id: 1, title: "Tailwind CSS", image: TailwindImg, bgColor: "" },
      { id: 2, title: "Shadcn/ui", image: ShadcnUiImg, bgColor: "" },
      { id: 3, title: "Antdesgin/ui", image: AntDesignImg, bgColor: "" },
    ],
  },
  {
    title: "Backend",
    stack: [
      { id: 0, title: "Node JS", image: NodeImg, bgColor: "" },
      { id: 1, title: "Express JS", image: ExpressImg, bgColor: "" },
      { id: 2, title: "MongoDB", image: MongoImg, bgColor: "" },
      { id: 3, title: "Firebase", image: FirebaseImg, bgColor: "" },
      { id: 4, title: "Prisma", image: PrismaImg, bgColor: "" },
    ],
  },
  {
    title: "Deployment",
    stack: [{ id: 0, title: "Vercel", image: VercelImg, bgColor: "" }],
  },
  {
    title: "Dev Tools",
    stack: [{ id: 0, title: "GitHub", image: GitHubImg, bgColor: "" }],
  },
];

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## favicon

[Docs] (https://favicon.io/)

### clsx and Tailwind merge

[Docs] (https://www.npmjs.com/package/clsx)

```sh
npm i clsx
```

-The clsx NPM package is a small and fast utility module for conditionally generating class names (className).

[Docs] (https://www.npmjs.com/package/tailwind-merge)
-Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.

```sh
npm i tailwind-merge
```

- create lib/utils.ts

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Adding google and custom fonts

- layout.tsx

```tsx
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

//Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const PixelFont = localFont({
  src: "../public/assets/fonts/pixel font-7.ttf",
  variable: "--font-pixel",
});

return (
  <html lang="en">
    <body
      className={cn(
        MainFont.className,
        OswaldFont.variable,
        PixelFont.variable
      )}
    >
      {children}
    </body>
  </html>
);
```

- tailwind.config.tsx

```tsx

theme: {
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        pixel: ["var(--font-pixel)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
```

### Grain background

- create components/visualEffects/grain-effects.tsx

## visualEffects component

```tsx
import { cn } from "@/lib/utils";

export default function GrainEffect() {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-full",
        "before-content-none before:-top-40 before:-left-40 before:w-[calc(100%+20rem)] before:h-[calc(100%+20rem)]",
        "before:fixed before:bg-grain before:opacity-15 pointer-events-none before:animate-noisy-bg"
      )}
    ></div>
  );
}
```

- global.css

```css
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .before-content-none::before {
    content: "";
  }
}
```

- tailwind-config.ts

```ts
theme: {
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        pixel: ["var(--font-pixel)"],
      },
      backgroundImage: {
        grain: "url(/assets/images/background/noisy-background.png)",
      },
      animation: {
        "noisy-bg": "noise 1s steps(2) infinitive",
      },
      keyframes: {
        noise: {
          "0%": {
            transform: "translate3d(0, 9rem, 0)",
          },
          "10%": {
            transform: "translate3d(-1rem, -4rem, 0)",
          },
          "20%": {
            transform: "translate3d(-8rem, 2rem, 0)",
          },
          "30%": {
            transform: "translate3d(9rem, -9rem, 0)",
          },
          "40%": {
            transform: "translate3d(-2rem, 7rem, 0)",
          },
          "50%": {
            transform: "translate3d(-9rem, -4rem, 0)",
          },
          "60%": {
            transform: "translate3d(2rem, 6rem, 0)",
          },
          "70%": {
            transform: "translate3d(7rem, -8rem, 0)",
          },
          "80%": {
            transform: "translate3d(-9rem, 1rem, 0)",
          },
          "90%": {
            transform: "translate3d(6rem, -5rem, 0)",
          },
          to: {
            transform: "translate3d(-7rem, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],

```

### Custom Animated cursor

- create cursor components
  -/components/cursor/cursor.tsx

```sh
npm i react-animated-cursor
```

```tsx
import AnimatedCursor from "react-animated-cursor";
import { FC } from "react";

interface CursorProps {
  color: string;
}

export const Cursor: FC<CursorProps> = ({ color }) => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: color,
      }}
      outerStyle={{
        border: `1px solid ${color}`,
      }}
      clickables={["a", "button", "select", "input", ".link"]}
    />
  );
};
```

- layout.tsx

```tsx
 return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
          PixelFont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}

```

### Water wave effect

[Docs] (https://www.npmjs.com/package/react-water-wave)

```sh
npm i react-water-wave
```

- -create a file water-wave-wrapper.tsx in visualEffects folder.

- water-wave-wrapper.tsx

```tsx
"use client";

import { FC } from "react";
import WaterWave from "react-water-wave";

interface WaterWaveWrapperProps {
  imageUrl: string;
  dropRadius: string;
  perturbance: string;
  resolution: string;
  children: () => ReactNode;
}

const WaterWaveWrapper: FC<WaterWaveWrapperProps> = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  children,
}) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
};

export default WaterWaveWrapper;
```

- app/page.tsx

```tsx
"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => <div className="h-screen"></div>}
    </WaterWaveWrapper>
  );
}
```

### Creating the card component

- Create components/ui/card.tsx

```tsx
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col gap-y-6">
        {/*Title */}
        {title ? (
          <div className="font-pixel">
            <p className="uppercase text-lg">{title}</p>
          </div>
        ) : null}
        {/* Children */}
        {children}
      </div>
    </div>
  );
};

export default Card;
```

- app/page.tsx

```tsx
"use client";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="UI Components">...</Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
```

### Creating the Button Component

- Create components/ui/button.tsx

```tsx

```

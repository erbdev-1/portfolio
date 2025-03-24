# Portfolio

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## Project Description

### Overview
The project is a **personal portfolio website** designed to showcase my skills, experience, and projects. It serves as an online resume and a platform to highlight my work to potential employers, clients, and collaborators.

### Objectives
- **Create a Personal Portfolio:** Develop a professional and aesthetically pleasing website to represent my personal brand.
- **Showcase Skills and Experience:** Highlight my technical skills, work experience, and educational background.
- **Display Various Sections:** Organize content into sections such as About, Contact, Featured Projects, and Landing to provide a comprehensive overview of my professional journey.

### Features
- **Responsive Design:** Ensures the website looks and functions well on all devices, including desktops, tablets, and smartphones.
- **Interactive UI Components:** Utilizes modern libraries like Framer Motion and Swiper to create engaging animations and sliders.
- **Custom Animated Cursor:** Enhances user experience with a unique animated cursor using `react-animated-cursor`.
- **Water Wave Effects:** Adds visual appeal with dynamic water wave effects via `react-water-wave`.
- **Live Clock:** Displays the current time with timezone support using `moment-timezone`.
- **Full-Screen Navigation Menu:** Provides an immersive navigation experience with a full-screen menu powered by Framer Motion.
- **Gallery Section:** Showcases projects and images using the Swiper slider for smooth transitions.
- **Contact Form:** Allows visitors to reach out through a responsive and functional contact form integrated with EmailJS.
- **Dark Mode Toggle:** Offers users the ability to switch between light and dark themes for personalized viewing.
- **SEO Optimized:** Implements best practices to ensure the website is discoverable by search engines.

## Table of Contents
1. [Project Description](#project-description)
   - [Overview](#overview)
   - [Objectives](#objectives)
   - [Features](#features)
2. [Technologies Used](#technologies-used)
   - [Programming Languages](#programming-languages)
   - [Frontend Frameworks/Libraries](#frontend-frameworkslibraries)
   - [Styling Libraries/Frameworks](#styling-librariesframeworks)
   - [Third-Party Libraries](#third-party-libraries)
   - [Tools and Platforms](#tools-and-platforms)
3. [Architecture Overview](#architecture-overview)
   - [System Architecture](#system-architecture)
   - [Data Flow](#data-flow)
4. [Component Schema](#component-schema)
   - [Frontend Components](#frontend-components)
   - [Sections](#sections)
   - [UI Components](#ui-components)
   - [Visual Effects](#visual-effects)
   - [Data](#data)
   - [Utilities](#utilities)
5. [Installation Instructions](#installation-instructions)
   - [Prerequisites](#prerequisites)
   - [Setup Steps](#setup-steps)
   - [Environment Configuration](#environment-configuration)
6. [Usage](#usage)
   - [Running the Application](#running-the-application)
   - [Build for Production](#build-for-production)
   - [Accessing the Application](#accessing-the-application)
   - [Basic Operations](#basic-operations)
   - [Screenshots](#screenshots)


## Technologies Used

### Programming Languages
The programming languages used in this project are:
- **TypeScript**
- **JavaScript**
- **CSS**
- **HTML**

### Frontend Frameworks/Libraries
The frontend frameworks or libraries utilized in this project are:
- **Next.js**
- **React**
- **Tailwind CSS**
- **styled-components**
- **emotion**

### Styling Libraries/Frameworks
The CSS frameworks used in this project are:
- **Tailwind CSS**
- **Swiper:** The most modern mobile touch slider

### Third-Party Libraries
The project uses several third-party libraries to enhance its functionality. Here is a list of the third-party libraries used in this project along with a brief explanation of each:

- **`@emailjs/browser`:** A library for sending emails directly from the browser using EmailJS.
- **`clsx`:** A utility for constructing `className` strings conditionally.
- **`framer-motion`:** A library for animations and gestures in React applications.
- **`moment-timezone`:** A library for parsing, validating, manipulating, and displaying dates and times in JavaScript, with timezone support.
- **`next`:** The Next.js framework for building server-side rendered React applications.
- **`react`:** The core library for building user interfaces in React.
- **`react-animated-cursor`:** A library for creating animated cursors in React applications.
- **`react-dom`:** The entry point to the DOM and server renderers for React.
- **`react-icons`:** A library for including popular icons in React projects.
- **`react-water-wave`:** A library for creating water wave effects in React applications.
- **`swiper`:** A modern mobile touch slider with hardware-accelerated transitions.
- **`tailwind-merge`:** A utility for merging Tailwind CSS classes.

These libraries are specified in the `package.json` file and are used throughout the project to provide various functionalities and enhancements.

### Tools and Platforms
- **Vercel:** The application is deployed using Vercel, as indicated by the `next.config.mjs` file which includes the configuration for the Next.js application.

## Architecture Overview
The architecture of the project can be summarized as follows:

- **Programming Languages:** The project uses TypeScript and JavaScript.
- **Frontend Frameworks/Libraries:** The project uses React and Next.js.
- **CSS Frameworks/Stylings Libraries:** The project uses Tailwind CSS, styled-components, and emotion.
- **Third-Party Libraries:** The project integrates various third-party libraries such as `react-animated-cursor`, `react-water-wave`, `framer-motion`, `moment-timezone`, `swiper`, `clsx`, and `tailwind-merge`.

### System Architecture
The system architecture of the **Portfolio** project is composed of several key components and technologies. Here is a description of the system architecture:

- **Frontend:** The frontend is built using React and Next.js. It includes various components such as `Header` (`components/navigation/header/header.tsx`), `FullScreenMenu` (`components/navigation/header/full-screen-menu/full-screen-menu.tsx`), and several UI components like `Gallery` (`components/ui/gallery.tsx`) and `LiveClock` (`components/ui/live-clock.tsx`).
- **Styling:** The project uses Tailwind CSS along with `styled-components` and `emotion` for styling, as indicated by the presence of configuration files like `tailwind.config.ts`.
- **Backend:** Since this is a portfolio website, backend functionalities are minimal and primarily involve sending emails via EmailJS. There is no dedicated backend server.
- **Database:** No database is used in this project as it primarily showcases static content and interactive UI components.
- **Authentication:** The project does not include user authentication as it serves as a personal portfolio.
- **API Integration:** The project integrates with external APIs such as EmailJS for handling contact form submissions.

### Data Flow
1. **User Interaction:** Visitors interact with the frontend by navigating through different sections like About, Projects, and Contact.
2. **Contact Form Submission:** When a user submits the contact form, the data is sent to EmailJS via the `@emailjs/browser` library.
3. **Email Handling:** EmailJS processes the form data and sends an email to the designated address.
4. **UI Updates:** Visual effects and animations are handled on the frontend using libraries like Framer Motion and Swiper, providing a dynamic user experience.

## Component Schema

The component schema in this project includes various components organized in different directories. Here are some key components and their respective directories:

### Frontend Components
- **Header (`components/navigation/header/header.tsx`):** Defines the header of the website, including navigation links and branding.
- **FullScreenMenu (`components/navigation/header/full-screen-menu/full-screen-menu.tsx`):** Implements a full-screen navigation menu with animations using Framer Motion.
- **Gallery (`components/ui/gallery.tsx`):** Showcases projects and images using the Swiper slider for smooth transitions.
- **LiveClock (`components/ui/live-clock.tsx`):** Displays the current time with timezone support using `moment-timezone`.
- **Cursor (`components/cursor/cursor.tsx`):** Custom animated cursor component using `react-animated-cursor`.
- **Water Wave Wrapper (`components/visualEffects/water-wave-wrapper.tsx`):** Adds dynamic water wave effects using `react-water-wave`.
- **NavLink (`components/navigation/header/full-screen-menu/nav-link.tsx`):** Defines individual navigation links within the full-screen menu.
- **FullScreenMenu Components:** Includes `animation.ts`, `menu-card.tsx`, and `toggle-button.tsx` for managing animations and interactions within the full-screen menu.

### Sections
- **About (`sections/about.tsx`):** Contains information about me, my background, and my interests.
- **Contact (`sections/contact.tsx`):** Features a contact form and contact information.
- **Featured Projects (`sections/featured.tsx`):** Highlights selected projects with descriptions and links.
- **Landing (`sections/landing.tsx`):** The landing page section with introductory content.

### UI Components
- **Button (`components/ui/button.tsx`):** Reusable button component with customizable styles.
- **Card (`components/ui/card.tsx`):** Reusable card component for displaying content in a structured format.
- **Fancy Button (`components/ui/fancy-button.tsx`):** Styled button with additional visual effects.
- **Input (`components/ui/input.tsx`):** Reusable input field component.
- **Profile (`components/ui/profile.tsx`):** Displays profile information and picture.
- **Scroll Down (`components/ui/scroll-down.tsx`):** Indicator prompting users to scroll down the page.
- **Select Input (`components/ui/select-input.tsx`):** Dropdown select component.
- **Social (`components/ui/social.tsx`):** Links to social media profiles.
- **Text Area (`components/ui/text-area.tsx`):** Reusable text area component for forms.
- **Timeline (`components/ui/timeline.tsx`):** Visual timeline of experience and education.
- **Tooltip (`components/ui/tooltip.tsx`):** Tooltip component for additional information on hover.

### Visual Effects
- **Grain Effect (`components/visualEffects/grain-effect.tsx`):** Adds a subtle grain texture to the background.
- **Magnetic Wrapper (`components/visualEffects/magnetic-wrapper.tsx`):** Creates a magnetic hover effect for interactive elements.
- **SVG Curve (`components/visualEffects/svg-curve.tsx`):** Renders animated SVG curves for decorative purposes.

### Data
- **Featured Projects (`data/featured.ts`):** Contains data for featured projects displayed on the website.
- **Gallery Images (`data/gallery.ts`):** Stores image data for the gallery section.
- **Tech Stack (`data/stack.ts`):** Lists the technologies and tools used in the projects.

### Utilities
- **Class Name Merger (`lib/utils.ts`):** Utility functions for merging and managing class names using `clsx`.

## Installation Instructions

### Prerequisites
- **Node.js:** v14.x or higher
- **TypeScript:** v4.x or higher
- **npm:** v6.x or higher
- **Vercel Account:** For deployment

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/Portfolio.git

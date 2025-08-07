# Vite + React Portfolio Template

A sleek, modern, and responsive portfolio template built with Vite, React, TypeScript, and Tailwind CSS. Designed to be easily customizable, it features smooth animations with Framer Motion and a clean structure to showcase your projects and skills.

[Live Demo](https://ammar-elmihy.netlify.app/)

## Table of Contents

- [Vite + React Portfolio Template](#vite--react-portfolio-template)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Customization](#customization)
  - [Available Scripts](#available-scripts)
  - [Folder Structure](#folder-structure)
  - [Configuration](#configuration)
    - [Vite](#vite)
    - [Tailwind CSS](#tailwind-css)
    - [ESLint](#eslint)
  - [Deployment](#deployment)
  - [License](#license)

## Features

- ⚡️ **Fast & Modern**: Built with Vite for a blazing-fast development experience.
- ⚛️ **React 18 & TypeScript**: Leverage the latest features of React with strong type safety.
- 🎨 **Styled with Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- 🎬 **Smooth Animations**: Powered by Framer Motion for fluid and engaging user interactions.
- ✨ **Clean & Reusable Components**: Sections for "About Me", "Work/Projects", and more.
- ✏️ **Code Quality**: ESLint setup for clean and consistent code.
- 📦 **Optimized for Production**: Vite plugins for an optimized and compressed production build.
- 🚀 **Deployment Ready**: Pre-configured for easy deployment on platforms like Vercel.

## Tech Stack

- ⚡ Vite
- 🔵 React
- 📄 TypeScript
- 🎨 Tailwind CSS
- 🐪 ESLint
- ✨ Framer Motion
- 🗿 Lucide React

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Amoory-Elmihy-77/my-portfolio.git
    cd my-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:5173` by default.

## Customization

This template is designed to be easily customized. Here's how to make it your own:

1.  **Update Content**:
    *   **About Section**: Open `src/components/About.tsx` and edit the text to write your own bio.
    *   **Projects/Work**: Modify `src/components/Work.tsx` to display your projects. Consider creating a separate data file (e.g., `src/data/projects.ts`) and mapping over it to generate project cards dynamically.
    *   **Metadata**: Change the title and meta tags in `index.html`.

2.  **Update Styling**:
    *   **Theme**: Modify `tailwind.config.js` to change colors, fonts, and other design tokens to match your personal brand.
    *   **Global Styles**: For base styles, edit `src/styles/index.css` (or wherever your main CSS import is).

3.  **Replace Assets**:
    *   **Favicon**: Replace the favicon files in the `public/` directory.
    *   **Images & SVGs**: Add your own project screenshots or personal photos to the `src/assets/` directory and update the paths in the components.

## Available Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Create a production-ready build.
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint to check for code quality issues.

## Folder Structure

```
├── public
│   └── index.html         # HTML entry point
├── src
│   ├── assets             # Static assets (images, fonts, etc.)
│   ├── components         # Reusable React components
│   ├── styles             # Global styles (e.g., Tailwind imports)
│   ├── App.tsx            # Root component
│   └── main.tsx           # Application entry point
├── .eslintrc.js           # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project metadata and scripts
```

## Configuration

### Vite

The `vite.config.ts` file includes the React plugin and compression plugin for optimized builds.

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`. You can customize your design tokens and plugins there.

### ESLint

ESLint is configured via `eslint.config.js` to enforce code quality and consistency. Run `npm run lint` to check for issues.

## Deployment

This template is ready for deployment to platforms like Vercel. A `vercel.json` is included for default settings. Simply connect your repository and push to deploy.

## License

This project is proprietary. All rights reserved.
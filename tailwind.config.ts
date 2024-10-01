/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    // Define a Tailwind CSS plugin
    plugin(function ({ addVariant, e }: any) {
      // Add a custom variant, "sidebar-expanded"
      addVariant("sidebar-expanded", ({ modifySelectors, separator }: any) => {
        modifySelectors(({ className }: any) => {
          return `.sidebar-expanded .${e(
            `sidebar-expanded${separator}${className}`
          )}`;
        });
      });
    }),
  ],
};
export default config;

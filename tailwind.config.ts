import { nextui } from "@nextui-org/react"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#38A926",
        "timsan-gray": "#1A1A1A",
      },
      backgroundImage: {
        "tilet-hero": "url('/assets/tilet_heroBG.png')",
        "institution-hero": "url('/assets/institution_heroIMG.png')",
        "about-hero": "url('/assets/about_BG.png')",
        "tilets-session": "url('/assets/tilets_session_BG.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config

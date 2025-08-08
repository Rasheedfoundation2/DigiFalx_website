// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0D0D18',
        'neon-cyan': '#00FFFF',
        'hyper-magenta': '#F000B8',
        'glass-edge': 'rgba(255, 255, 255, 0.1)',
        'glass-surface': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        heading: ['var(--font-oxanium)'],
        body: ['var(--font-inter)'],
      },
      backdropBlur: {
        'xl': '24px',
      },
    },
  },
  plugins: [],
}
export default config
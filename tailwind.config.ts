import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales Equitry
        sage: {
          DEFAULT: '#738C86',
          dark: '#5C706B',
          darker: '#5A726D',
          darkest: '#323D3B',
          light: '#9AAEA9',
          lighter: '#BCCDC5',
          pale: '#BFBBB8',
        },
        cream: '#FFFAF5',
        taupe: '#CCBCA9',
        noir: '#010101',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      backgroundImage: {
        'gradient-cream': 'linear-gradient(135deg, #FFFAF5 0%, #F5EDE0 100%)',
      },
    },
  },
  plugins: [],
}
export default config

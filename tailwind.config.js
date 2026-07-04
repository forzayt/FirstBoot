/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        bg: {
          base:    '#0a0a0b',
          surface: '#111113',
          raised:  '#18181c',
          overlay: '#1e1e24',
        },
        border: {
          subtle:  '#1f1f26',
          DEFAULT: '#27272e',
          strong:  '#33333c',
        },
        text: {
          DEFAULT: '#e4e4e7',
          muted:   '#71717a',
          faint:   '#52525b',
        },
        accent: {
          DEFAULT: '#6366f1',
          hover:   '#818cf8',
          muted:   '#312e81',
          faint:   '#1e1b4b',
        },
      },
      borderRadius: {
        sm: '3px',
        DEFAULT: '5px',
        md: '6px',
        lg: '8px',
      },
      fontSize: {
        '2xs': '0.65rem',
      },
    },
  },
  plugins: [],
}

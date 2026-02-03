/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

// Configure default body font here. Options: 'sans', 'serif', 'mono'
const DEFAULT_BODY_FONT = 'mono'
const BODY_FONT_MAP = {
  sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  serif: ['ui-serif', 'Georgia', 'serif'],
  mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
}

module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky, // Default to Sky, change this to customize!
        secondary: colors.orange,
        canvas: colors.slate, // Background color for the site: slate, gray, zinc, neutral, stone, blue
      },
      fontFamily: {
        body: BODY_FONT_MAP[DEFAULT_BODY_FONT] || BODY_FONT_MAP.mono,
        sans: BODY_FONT_MAP.sans,
        serif: BODY_FONT_MAP.serif,
        mono: BODY_FONT_MAP.mono,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              backgroundColor: theme('colors.slate.200'),
              color: theme('colors.slate.800'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
          },
        },
        invert: {
          css: {
            code: {
              backgroundColor: theme('colors.slate.800'),
              color: theme('colors.primary.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  corePlugins: {
    preflight: true,
  },
  safelist: [
    'top-0',
    'max-lg:top-0'
  ]
}

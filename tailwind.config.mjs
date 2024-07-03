/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        craftworkGrotesk: ['Craftwork Grotesk', 'sans-serif'],
        generalSans: ['General Sans', 'sans-serif'],
        plusJakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
        sFProDisplay: ['SF Pro Display', 'sans-serif'],
      },
      screens: {

        'xxl': '1440px',

      }
    },
  },
  plugins: [],
}

import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'], // Choose the subset(s) you need
  weight: ['400', '700'], // Specify font weights (e.g., normal and bold)
  style: ['normal', 'italic'], // Optional: Include italic styles
  display: 'swap', // Improve font rendering by using the swap strategy
});
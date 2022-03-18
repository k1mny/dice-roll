import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/dice-roll/' : './',
  build: {
    outDir: 'out',
  },
  plugins: [react()],
});

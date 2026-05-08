import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this app from a subpath, so keep asset URLs relative.
  base: './',
  server: {
    port: 5173,
  },
})

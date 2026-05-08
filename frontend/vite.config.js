import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Keep the build portable for GitHub Pages and custom repo names.
  // Use an explicit override only when a deployment path is truly fixed.
  base: process.env.VITE_BASE_PATH || './',
  server: {
    port: 5173,
  },
})

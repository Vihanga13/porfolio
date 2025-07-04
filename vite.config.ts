import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/porfolio/', // Replace 'portfolio-website' with your actual repository name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

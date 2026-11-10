import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base relativa: funciona igual en dominio propio que en GitHub Pages
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})

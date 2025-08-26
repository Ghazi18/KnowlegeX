
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: ['chrome >= 64', 'safari >= 16'],
      modernPolyfills: ['es.object.from-entries'],
    })
  ]
})
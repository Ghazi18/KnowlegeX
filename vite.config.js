import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: ['defaults', 'safari >= 13', 'ios >= 13'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  build: {
    target: ['es2018', 'safari13'] // يخفض ميزات JS لمتصفحات أقدم
  }
})

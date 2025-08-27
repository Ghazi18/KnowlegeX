// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      // يغطي iPhone 8 وما بعده + سفاري قديم،
      // لكن iPhone 12 iOS 16.6 سيأخذ الحزمة الحديثة تلقائيًا
      targets: ['iOS >= 11', 'Safari >= 11', 'Chrome >= 49', 'Firefox >= 54', 'Edge >= 18'],

      // خفيف على المتصفحات الحديثة
      modernPolyfills: true,

      // إن أردت دعم fetch للقدماء بدون سكربت منفصل:
      additionalLegacyPolyfills: ['whatwg-fetch', 'regenerator-runtime/runtime'],

      renderLegacyChunks: true,
    }),
  ],
  build: {
    target: 'es2018',
  },
})

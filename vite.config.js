
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      // يدعم سفاري القديم و iOS 12+
      targets: ['defaults', 'ios >= 12', 'safari >= 12'],
      // بعض المشاريع تحتاجه لـ async/await
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      // بوليفلز حديثة شائعة تنقص سفاري 14/15
      modernPolyfills: [
        'es.promise.any',
        'es.object.from-entries',
        'es.array.at'
      ]
    })
  ],
  build: {
    // خفّض الهدف ليتوافق مع سفاري
    target: ['es2019', 'safari14'],
    cssTarget: 'safari14',
    // مهم لمتصفحات لا تدعم modulepreload بالكامل
    polyfillModulePreload: true
  }
})

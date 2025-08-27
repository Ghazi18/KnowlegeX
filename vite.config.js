import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      // غطِّ iPhone 8 (iOS 11) وسفاري القديم + متصفحات قديمة معقولة
      targets: ['iOS >= 11', 'Safari >= 11', 'Chrome >= 49', 'Firefox >= 54', 'Edge >= 18'],

      // يضيف فقط الـ polyfills المطلوبة حسب الاستهداف (خفيف على المتصفحات الحديثة)
      modernPolyfills: true,

      // للتأكد من عمل async/await و generators على البيئات القديمة
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],

      // إنتاج حِزم legacy منفصلة (nomodule) جنب الحديثة
      renderLegacyChunks: true,
    })
  ],
  build: {
    // مستوى JS للحزمة الحديثة (الأعلى يصغّر الكود ويقلل polyfills)
    target: 'es2018'
  }
})

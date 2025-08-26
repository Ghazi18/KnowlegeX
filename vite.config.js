import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      // استهدف متصفحات أقدم (عدّل بحسب جمهورك)
      targets: [
        'defaults',
        'not IE 11',
        'iOS >= 10',
        'Android >= 5'
      ],
      // يضيف polyfills شائعة تلقائياً عند الحاجة
      modernPolyfills: true, // Vite 5+
      // لو تستخدم Vite أقدم:
      // polyfills: ['es.symbol', 'es.promise', 'es.array.iterator', 'es.object.assign', 'es.promise.finally', 'es/map', 'es/set', 'es.array.includes', 'es.object.from-entries', 'es.string.includes', 'web.dom-collections.iterator']
    })
  ]
})

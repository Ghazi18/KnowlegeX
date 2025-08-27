
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
     tailwindcss(),
    legacy({
      targets: [
        'defaults',
        'not IE 11',
        'Android >= 5',
        'iOS >= 10',
      ],
      // دعم async/await و generators في الأجهزة القديمة
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      // إدراج بوليفلز حداثية عند الحاجة
      modernPolyfills: true,
    }),
  ],
  build: {
    // اكسر الميزات الحديثة جداً لتناسب متصفحات قديمة نسبيًا
    target: ['es2017', 'edge88', 'firefox78', 'chrome87', 'safari13'],
    // تحويلات CSS لتوافق Safari/iOS أقدم
    cssTarget: ['chrome61', 'safari11'],
    sourcemap: false,
  },
});

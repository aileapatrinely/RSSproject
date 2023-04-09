import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import url from '@rollup/plugin-url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      url({
        include:[
          '**/*.png',
          '**/*.jpg',
          '**/*.jpeg',
          '**/*.gif',
          '**/*.svg',
          '**/*.webp',
          '**/*.ico',
        ]
      }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
});
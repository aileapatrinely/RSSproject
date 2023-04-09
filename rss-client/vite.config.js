import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import url from '@rollup/plugin-url'
import svg from '@rollup/plugin-svg'

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
      svg(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
});
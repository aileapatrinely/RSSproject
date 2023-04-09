import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import url from '@rollup/plugin-url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      url({
        limit: 0,
        include:[
          '**/*.png',
          '**/*.jpg',
          '**/*.jpeg',
          '**/*.gif',
          '**/*.svg',
          '**/*.webp',
          '**/*.ico',
        ],
        exclude: ['https://external-site.com/**']
      }),
    ],
    external: ['https://external-site.com/**'],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              //exclude URLs starting with http:// or https://
              if(id.startsWith('http://') || id.startsWith('https://')) {
                return 'external';
              }
            }
          }
        }
      }
});
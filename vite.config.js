import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        register: resolve(__dirname, 'register.html'),
        bring: resolve(__dirname, 'what-to-bring.html'),
        shop: resolve(__dirname, 'shop.html'),
      },
    },
  },
});

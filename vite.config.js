import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fullStack: resolve(__dirname, 'full-stack.html'),
        cyber: resolve(__dirname, 'cyber.html'),
        hardware: resolve(__dirname, 'hardware.html'),
      },
    },
  },
})

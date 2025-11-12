import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname),
  base: './', 
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), 
    },
  },
})

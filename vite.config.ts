import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

const config = defineConfig({
  resolve: {
    alias: {
      '#': resolve(__dirname, './src'),
    },
  },
  plugins: [
    tailwindcss(),
    viteReact(),
  ],
  server: { port: 3000 },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})

export default config

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/demos/one-thread/',
  plugins: [react()],
  build: { outDir: '../../dist/demos/one-thread', emptyOutDir: true },
})

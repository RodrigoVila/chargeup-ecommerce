/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `package.input.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    restoreMocks: true,
  },
})

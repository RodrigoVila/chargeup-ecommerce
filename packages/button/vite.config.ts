/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        button: path.resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `package.${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
    sourcemap: true,
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
    // coverage: {
    //   reporter: ['clover', 'lcov', 'text', 'json', 'html'],
    //   all: true,
    //   include: ['src'],
    //   exclude: ['src/index.ts'],
    //   statements: 80,
    //   branches: 80,
    //   functions: 80,
    //   lines: 80,
    // },
    restoreMocks: true,
  },
})

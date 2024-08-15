import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node', // Ensure this is set to 'node' for server-side testing
  },
})

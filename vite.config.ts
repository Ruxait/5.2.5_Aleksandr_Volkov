/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/3.2.3_Aleksandr_Volkov/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

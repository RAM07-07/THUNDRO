import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three') || id.includes('@react-three')) {
            return 'vendor_three';
          }
          if (id.includes('framer-motion')) {
            return 'vendor_motion';
          }
          if (id.includes('lucide-react')) {
            return 'vendor_icons';
          }
        }
      }
    }
  }
})

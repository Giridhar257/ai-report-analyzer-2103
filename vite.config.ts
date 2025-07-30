import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.production' });
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // raise the limit to 1000 KB
  },
  // optimizeDeps: {
  //   exclude: ['lucide-react'],
  // },
  define: {
  'process.env': process.env//i added this at 10:05//29/07/2024
}

});

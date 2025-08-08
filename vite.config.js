import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/widget.jsx',
      name: 'AccessibilityWidget',
      fileName: 'widget',
      formats: ['iife']
    },
    rollupOptions: {
      // Make sure these are all the dependencies you need
      external: [],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-i18next': 'i18next'
        },
        // This ensures all dependencies are bundled
        inlineDynamicImports: true
      }
    }
  }
});
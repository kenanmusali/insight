import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Comment out or remove build.lib section:
  // build: {
  //   lib: {
  //     entry: './src/widget.jsx',
  //     name: 'AccessibilityWidget',
  //     fileName: 'widget',
  //     formats: ['iife'],
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     output: {
  //       globals: {
  //         react: 'React',
  //         'react-dom': 'ReactDOM',
  //       },
  //     },
  //   },
  // },
});

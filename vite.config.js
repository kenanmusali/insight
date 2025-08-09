import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/widget.jsx',      // your current widget entry
      name: 'AccessibilityWidget',  // global name (optional)
      fileName: () => 'widget.js',  // force single file name
      formats: ['iife'],            // self-executing bundle for <script>
    },
    rollupOptions: {
      // IMPORTANT: we want React included so host pages don't need it
      external: [],
      output: {
        inlineDynamicImports: true, // avoid creating extra chunks
      },
    },
    minify: 'esbuild',
  },
});

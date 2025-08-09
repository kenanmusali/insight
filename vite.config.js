// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: 'src/widget.jsx',      
//       name: 'AccessibilityWidget',  
//       fileName: () => 'widget.js',  
//       formats: ['iife'],            
//     },
//     rollupOptions: {

//       external: [],
//       output: {
//         inlineDynamicImports: true, 
//       },
//     },
//     minify: 'esbuild',
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/widget.jsx',
      name: 'AccessibilityWidget',
      fileName: () => 'widget.js',
      formats: ['iife'],
    },
    rollupOptions: {
      inlineDynamicImports: true,
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': {}, // Prevents "process is not defined"
  },
});

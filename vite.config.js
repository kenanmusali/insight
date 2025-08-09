
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [
//     react(),
    
//   ],
//   build: {
//     lib: {
//       entry: 'src/widget.jsx',          
//       name: 'AccessibilityWidget',       
//       fileName: () => 'widget.js',       
//       formats: ['iife'],                 
//     },
//     rollupOptions: {
//       inlineDynamicImports: true,         
//     },
//     minify: 'esbuild',                     
//     sourcemap: false,                     
//   },
//   esbuild: {
//     drop: ['console', 'debugger'],          
//     legalComments: 'none',                 
//   },
//   define: {
//     'process.env.NODE_ENV': JSON.stringify('production'),
//     'process.env': {},                    
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),  // ← inject CSS into widget.js
  ],
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
    minify: 'esbuild',
    sourcemap: false,
    emptyOutDir: false,
    // (optional) ensure Vite doesn't split css; the plugin handles injection anyway
    cssCodeSplit: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': {},
  },
});

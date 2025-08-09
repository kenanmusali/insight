
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
//       inlineDynamicImports: true,
//     },
//   },
//   define: {
//     'process.env.NODE_ENV': JSON.stringify('production'),
//     'process.env': {}, 
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import obfuscator from 'rollup-plugin-obfuscator'; // optional

export default defineConfig({
  plugins: [
    react(),
    // obfuscator({ optionsPreset: 'high-obfuscation' }) // uncomment if you want extra obfuscation
  ],
  build: {
    lib: {
      entry: 'src/widget.jsx',           // widget entry point
      name: 'AccessibilityWidget',       // global var name
      fileName: () => 'widget.js',        // output file name
      formats: ['iife'],                  // browser-friendly self-executing script
    },
    rollupOptions: {
      inlineDynamicImports: true,         // bundle everything into one file
    },
    minify: 'esbuild',                     // fast minification
    sourcemap: false,                       // no source maps in prod
  },
  esbuild: {
    drop: ['console', 'debugger'],          // remove console logs & debugger statements
    legalComments: 'none',                  // strip license/comments from output
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': {},                      // avoid "process is not defined"
  },
});

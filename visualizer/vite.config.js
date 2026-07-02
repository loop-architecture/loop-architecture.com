import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Library build: one self-contained ES bundle (React included) + one CSS file,
// so the static site pages and `loopmanager view` can load it with a single script.
// Monaco is fetched at runtime from a CDN by @monaco-editor/react, so it is not
// bundled here.
export default defineConfig({
  plugins: [react()],
  // Library builds don't replace process.env.NODE_ENV, but bundled React reads it.
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es'],
      fileName: () => 'visualizer.js',
    },
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: { assetFileNames: 'visualizer.[ext]' },
    },
  },
})

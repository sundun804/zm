import { defineConfig } from 'vite'

// zm 仓库固定部署到 sundun804.github.io/zm/
export default defineConfig({
  base: '/zm/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})

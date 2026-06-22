import { defineConfig } from 'vite'

// GitHub Pages 部署时 base 为 /zm/，对应 sundun804.github.io/zm/
const base = process.env.GITHUB_PAGES === 'true' ? '/zm/' : '/'

export default defineConfig({
  base,
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})

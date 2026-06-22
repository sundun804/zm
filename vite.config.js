import { defineConfig } from 'vite'

// GitHub Pages 部署时设置 base 为仓库名，如 /ZMCH/
// 本地开发或自定义域名部署时使用 /
const base = process.env.GITHUB_PAGES === 'true' ? '/ZMCH/' : '/'

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

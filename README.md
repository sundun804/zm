# 众米创合企业官网

苏州众米创合全渠道高端玩具供应链服务商官方网站。

## 本地开发

```bash
npm install
npm run dev
```

浏览器访问 http://localhost:5173

## 构建

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

本项目是静态网站（HTML + CSS + JS），**完全支持 GitHub Pages 部署**。

### 步骤

1. 在 GitHub 创建仓库（建议命名为 `ZMCH`）
2. 推送代码到 `main` 分支：

```bash
git init
git add .
git commit -m "feat: 众米创合企业官网"
git remote add origin https://github.com/<你的用户名>/ZMCH.git
git push -u origin main
```

3. 进入仓库 **Settings → Pages**
4. Source 选择 **GitHub Actions**
5. 推送后 Actions 会自动构建并部署

### 访问地址

- 项目页：`https://<你的用户名>.github.io/ZMCH/`

> 如果仓库名不是 `ZMCH`，需修改 `vite.config.js` 中的 `base` 路径为 `/你的仓库名/`。

### 自定义域名（可选）

在仓库 Settings → Pages 中配置自定义域名，并将 `vite.config.js` 的 `base` 改为 `'/'`。

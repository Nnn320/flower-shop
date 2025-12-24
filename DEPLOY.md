# 部署指南

本文档说明如何将花匠花店项目部署到各种平台。

## 📋 前置准备

1. 确保项目可以正常构建：
   ```bash
   npm install
   npm run build
   ```

2. 检查 `dist` 目录是否生成成功

## 🌐 GitHub Pages 部署

### 方法一：使用 GitHub Actions（推荐）

1. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 `GitHub Actions`
   - 保存设置

3. **自动部署**
   - 每次推送到 `main` 分支时，GitHub Actions 会自动构建并部署
   - 部署完成后，访问：`https://your-username.github.io/your-repo-name/`

### 方法二：手动部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **部署 dist 目录**
   - 在仓库 Settings → Pages 中
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `gh-pages`，目录选择 `/ (root)`
   - 将 `dist` 目录内容推送到 `gh-pages` 分支

## ☁️ Netlify 部署

1. **登录 Netlify**
   - 访问 [netlify.com](https://www.netlify.com)
   - 使用 GitHub 账号登录

2. **新建站点**
   - 点击 "New site from Git"
   - 选择你的 GitHub 仓库

3. **配置构建设置**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `test`（如果仓库根目录不是 test）

4. **部署**
   - 点击 "Deploy site"
   - 等待部署完成

## ⚡ Vercel 部署

1. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择你的 GitHub 仓库

3. **配置项目**
   - Framework Preset: Vite
   - Root Directory: `test`（如果仓库根目录不是 test）
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **部署**
   - 点击 "Deploy"
   - 等待部署完成

## 🔧 自定义域名

### GitHub Pages
1. 在仓库 Settings → Pages → Custom domain 中添加域名
2. 配置 DNS 记录（CNAME 或 A 记录）

### Netlify/Vercel
1. 在项目设置中添加自定义域名
2. 按照平台提示配置 DNS

## ⚠️ 注意事项

1. **基础路径配置**
   - 如果部署到子路径（如 `/flower/`），确保 `vite.config.js` 和 `src/main.js` 中的 `base` 路径正确

2. **404 页面**
   - 项目已包含 `public/404.html` 用于处理 SPA 路由
   - 某些平台可能需要额外配置

3. **环境变量**
   - 如果使用环境变量，需要在部署平台配置

4. **构建优化**
   - 生产构建会自动优化代码
   - 确保所有资源路径使用相对路径

## 🐛 常见问题

### 部署后页面空白
- 检查基础路径配置是否正确
- 检查浏览器控制台是否有错误
- 确认所有资源路径正确

### 路由不工作
- 确保配置了 404 重定向
- 检查路由模式（使用 `createWebHistory`）

### 图片不显示
- 检查图片路径是否正确
- 确认图片文件已包含在构建产物中

## 📚 相关链接

- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Netlify 文档](https://docs.netlify.com/)
- [Vercel 文档](https://vercel.com/docs)



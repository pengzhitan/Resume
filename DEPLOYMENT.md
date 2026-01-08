# 个人作品集网站部署方案

本文档详细说明了本项目的部署流程，主要采用 **GitHub Pages** 作为免费且稳定的静态托管方案。

## 1. 部署前准备

### 1.1 项目配置检查

确保项目根目录下的配置文件已针对部署环境进行优化：

- **`vite.config.ts`**: 必须配置 `base` 路径，使其与 GitHub 仓库名称一致。
  ```typescript
  // vite.config.ts
  export default defineConfig({
    base: "/Resume/", // 注意：这里必须是你的仓库名，前后都要有斜杠
    plugins: [react()],
    // ...
  })
  ```

- **`package.json`**: 添加 `homepage` 字段和部署脚本。
  ```json
  {
    "homepage": "https://pengzhitan.github.io/Resume",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
  }
  ```

### 1.2 图片资源路径

在代码中引用 `public` 目录下的图片时，**不要使用绝对路径**（如 `/profile.jpg`），应使用相对路径（如 `profile.jpg`）或结合 `import.meta.env.BASE_URL`，否则在子路径部署时会导致 404 错误。

## 2. 部署流程（GitHub Pages）

本项目已配置自动化部署脚本，只需简单几步即可完成发布。

### 步骤 1：安装依赖

如果是首次部署，确保已安装 `gh-pages` 工具（本项目已安装）：

```bash
pnpm install
```

### 步骤 2：执行部署命令

在终端运行以下命令，该命令会自动执行构建（`npm run build`）并将 `dist` 目录推送到远程的 `gh-pages` 分支：

```bash
npm run deploy
# 或者
pnpm run deploy
```

### 步骤 3：GitHub 仓库设置

1.  登录 GitHub，进入仓库页面：[https://github.com/pengzhitan/Resume](https://github.com/pengzhitan/Resume)
2.  点击顶部导航栏的 **Settings**。
3.  在左侧菜单栏点击 **Pages**。
4.  在 **Build and deployment** 部分：
    *   **Source**: 选择 `Deploy from a branch`。
    *   **Branch**: 选择 `gh-pages` 分支，文件夹选择 `/(root)`。
5.  点击 **Save**。

### 步骤 4：验证部署

等待几分钟（GitHub Actions 构建完成后），访问生成的链接：
**https://pengzhitan.github.io/Resume/**

## 3. 常见问题排查

-   **页面空白/404**：
    *   检查 `vite.config.ts` 中的 `base` 是否与仓库名完全一致。
    *   检查路由配置，如果是 SPA（单页应用），确保 `gh-pages` 不会因为刷新而找不到路径（通常静态部署不需要额外配置，除非使用了 `BrowserRouter` 且没有服务端支持，本项目使用的是哈希路由或简单的锚点导航，无此问题）。

-   **图片无法加载**：
    *   确认图片路径没有以 `/` 开头。
    *   确认图片文件实际存在于 `public` 目录下。

-   **更新代码后如何重新部署？**
    *   只需再次运行 `npm run deploy` 即可。

---
**技术栈**: React + Vite + Tailwind CSS + Framer Motion

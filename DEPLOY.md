# 部署到 GitHub Pages

## 自动部署配置

本项目已配置 GitHub Actions 自动部署到 GitHub Pages。

### 部署步骤

1. **启用 GitHub Pages**
   - 进入 GitHub 仓库页面
   - 点击 `Settings` → `Pages`
   - 在 `Source` 下选择 `GitHub Actions`

2. **推送代码触发部署**
   ```bash
   git add .
   git commit -m "配置 VitePress 部署"
   git push origin main
   ```

3. **查看部署状态**
   - 进入仓库的 `Actions` 标签页
   - 查看 "Deploy VitePress site to Pages" 工作流运行状态
   - 部署成功后，网站将在几分钟内可访问

### 访问地址

部署成功后，网站将在以下地址访问：

**https://lilygopp.github.io/LILYGO_wiki/**

### 本地预览

在推送前，可以本地预览构建结果：

```bash
# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

### 工作流说明

- **触发条件**：推送到 `main` 分支时自动触发
- **手动触发**：可以在 Actions 页面手动运行工作流
- **构建环境**：Node.js 20
- **部署目标**：GitHub Pages

### 注意事项

1. 确保仓库的 GitHub Pages 设置为 "GitHub Actions" 模式
2. 首次部署可能需要几分钟才能生效
3. 后续推送会自动触发重新部署
4. 可以在 Actions 页面查看详细的构建日志

### 自定义域名（可选）

如果需要使用自定义域名：

1. 在仓库 `Settings` → `Pages` → `Custom domain` 中设置域名
2. 在 DNS 提供商处添加 CNAME 记录指向 `lilygopp.github.io`
3. 更新 `docs/.vitepress/config.ts` 中的 `base` 配置为 `/`

```typescript
export default defineConfig({
  base: '/', // 使用自定义域名时改为 /
  // ...
})
```

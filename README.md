# 🚀 Vibe Coding Kit

终极Next.js 15 + TypeScript + Tailwind CSS开发启动套件，专为AI辅助编程设计。

## ✨ 特性

- **Next.js 15** - 最新React框架，支持App Router
- **TypeScript** - 严格类型检查
- **Tailwind CSS v4** - 原子化CSS框架
- **Shadcn/ui** - 高质量组件库
- **Storybook 8** - 组件开发与文档
- **Framer Motion** - 流畅动画
- **Zustand** - 轻量级状态管理
- **Husky** - Git hooks自动检查
- **完整AI配置** - Cursor规则与开发模板

## 🏗️ 项目结构

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── _atoms/            # 原子组件
│   ├── _molecules/        # 分子组件
│   ├── _organisms/        # 有机体组件
│   ├── _templates/        # 页面模板
│   ├── _bits/             # 动画组件
│   └── ui/                # Shadcn/ui组件
├── lib/
│   ├── ai/                # AI辅助工具
│   ├── utils/             # 工具函数
│   ├── schemas/           # Zod验证模式
│   └── hooks/             # 自定义Hooks
├── types/                 # TypeScript类型
└── stories/               # Storybook故事
```

## 🎯 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 启动Storybook
npm run storybook

# 代码格式化
npm run format

# 类型检查
npm run type-check
```

## 🎨 使用指南

### 创建新组件

```bash
# 使用AI模板创建组件
# 复制模板文件并修改
```

### 开发规范

- 所有组件必须有Storybook故事
- 使用TypeScript严格模式
- 遵循原子化设计原则
- 使用Tailwind CSS类

### 提交规范

```bash
git add .
git commit -m "feat: 添加新功能"
```

## 📦 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **组件库**: Shadcn/ui
- **状态管理**: Zustand
- **动画**: Framer Motion
- **测试**: Storybook
- **代码质量**: ESLint + Prettier + Husky

## 🛠️ 开发工具

- **VS Code** - 推荐编辑器
- **Cursor** - AI辅助编程
- **Storybook** - 组件开发环境
- **React DevTools** - React调试

## 🚢 部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

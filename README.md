# 🦅 React & TypeScript & Webpack Starter

A lightweight, developer-friendly boilerplate built with **React 18**, **TypeScript**, and **Webpack 5** — perfect for learning or building modern single-page applications from scratch.
> ⚡️ No CRA, no Next — just a clean, fast, fully configurable setup.

## 🚀 Features

- 🧩 React 18 + TypeScript — Strictly typed, JSX-ready setup.
- ⚙️ Webpack 5 — Customizable build pipeline for any project.
- 🔥 Hot Reloading via webpack-dev-server.
- 🎨 CSS Support with style-loader and css-loader.
- 🧼 CleanWebpackPlugin — auto-clears old builds.
- 🪄 HTMLWebpackPlugin — automatically injects your bundle.
- 💡 Alias Support (`@/` → `src/`) for clean imports.
- 🌐 SPA-ready with `historyApiFallback` for routing.

## 🧱 Project Structure
```
react-ts/
├─ build/
│  ├─ assets/js/
│  └─ index.html
│
├─ public/
│  └─ index.html
│
├─ src/
│  ├─ app/
│  │  ├─ Main.tsx
│  │  ├─ index.css
│  │  └─ pages/
│  │      └─ House.tsx
│  └─ components/
│      └─ Button.tsx
│
├─ tsconfig.json
├─ webpack.config.ts
├─ package.json
└─ README.md
```

## 📦 Installation
Using **Bun** (recommended)
```bash
bun install
```

Or with *npm*/*yarn*/*pnpm*
```bash
npm install
# Or
yarn install
# Or
pnpm install
```

## 🧩 Available Scripts
These are the core commands defined in your `package.json`

| Script    | Description |
|-----------|------------|
| `bun run dev` | Start development server with hot reload on port `5511`. |
| `bun run build` |  Build optimized production bundle into `/build`. |
| `bun run start` |  Serve the built project locally (SPA mode). |
| `bun run typecheck` | Type-checks the entire project with no emit. |

## Quick Start

```bash
# Install dependencies
bun install

# Start the development server
bun run dev
# open http://localhost:5511

# Build for production
bun run build

# Preview locally
bun run start
# open http://localhost:5050
```

## 🪶 License

MIT © Arby

## 💬 Contributing

Pull requests and feature suggestions are welcome!
Fork the repository and open an issue or PR if you find something to improve.

## ⭐️ Show Support

If you find this starter helpful:

Give it a ⭐️ on GitHub

Share it with other developers

Use it for your own project setup
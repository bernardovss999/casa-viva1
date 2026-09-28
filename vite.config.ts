import { defineConfig, type Connect, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";

// The entry page is home.html (not index.html): serve it for every client-side route in dev/preview.
const toHome: Connect.NextHandleFunction = (req, _res, next) => {
  const url = req.url ?? "/";
  if (req.method === "GET" && !path.extname(url.split("?")[0]) && !url.startsWith("/@") && !url.startsWith("/src")) {
    req.url = "/home.html";
  }
  next();
};

// Static hosts look for index.html at "/" (and at "/<route>/"), and use 404.html for unknown paths.
// Emit technical copies of home.html so "/" and every page route answer 200 on any static host,
// with no host-specific rewrite config. The app router then renders the right page.
const routes = ["a-casa", "gastronomia", "programacao", "aniversarios", "visite"];
const homeAliases = (): Plugin => ({
  name: "home-html-aliases",
  apply: "build",
  closeBundle() {
    const dist = path.resolve(__dirname, "dist");
    const home = path.join(dist, "home.html");
    if (!fs.existsSync(home)) return;
    fs.copyFileSync(home, path.join(dist, "index.html"));
    fs.copyFileSync(home, path.join(dist, "404.html"));
    for (const r of routes) {
      fs.mkdirSync(path.join(dist, r), { recursive: true });
      fs.copyFileSync(home, path.join(dist, r, "index.html"));
    }
  },
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "home-html-entry",
      configureServer: (server) => { server.middlewares.use(toHome); },
      configurePreviewServer: (server) => { server.middlewares.use(toHome); },
    },
    homeAliases(),
  ],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { rollupOptions: { input: path.resolve(__dirname, "home.html") } },
});

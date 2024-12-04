import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Constants
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 5173;
const BASE = process.env.BASE || "/";

const setupProduction = async (app) => {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;

  app.use(compression());
  app.use(BASE, sirv("./dist/client"));

  const module = await import("./dist/server/entry-server.jsx");

  app.get("*", (req, res) => {
    try {
      module.render(req.url, res);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.stack);
        res.status(500).end(e.stack);
      }
    }
  });
};

const setupDev = async (app) => {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    base: BASE,
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;

    try {
      const template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );

      const templateHtml = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

      const { html: appHtml, key, css, ids } = await render(url);

      const html = templateHtml
        .replace("<!--ssr-outlet-->", appHtml)
        .replace(
          "<!--ssr-emotion-css-->",
          `<style data-emotion="${key} ${ids.join(" ")}">${css}</style>`
        );

      await res
        .status(200)
        .set({
          "Content-Type": "text/html",
        })
        .end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });
};

const app = express();

if (IS_PRODUCTION) {
  await setupProduction(app);
} else {
  await setupDev(app);
}

app.listen(PORT, () => {
  console.log(`Server started`);
});

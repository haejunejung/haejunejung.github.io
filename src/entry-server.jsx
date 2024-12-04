import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import App from "./App";
import createCache from "@emotion/cache";

const key = "custom";
const cache = createCache({ key: key });

const {
  constructStyleTagsFromChunks,
  extractCriticalToChunks,
  extractCritical,
} = createEmotionServer(cache);

export function render(url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </StaticRouter>
    </StrictMode>
  );

  const { css, ids } = extractCritical(html);
  const chunks = extractCriticalToChunks(html);
  const styles = constructStyleTagsFromChunks(chunks);

  return { html, styles, key, css, ids };
}

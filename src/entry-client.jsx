import App from "./App";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({ key: "custom" });

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <CacheProvider value={cache}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CacheProvider>
  </StrictMode>
);

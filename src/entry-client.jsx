import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./App";

const cache = createCache({ key: "custom" });

hydrateRoot(
	document.getElementById("root"),
	<StrictMode>
		<CacheProvider value={cache}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CacheProvider>
	</StrictMode>,
);

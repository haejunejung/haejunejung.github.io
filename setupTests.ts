import { cleanup } from "@testing-library/react";
import React from "react";
import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
	cleanup();
});

globalThis.React = React;

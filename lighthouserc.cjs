// https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
module.exports = {
  ci: {
    collect: {
      startServerCommand: "yarn run preview", // The command to run to start the server
      startServerReadyPattern: "Local", // String pattern to listen for the server
      numberOfRuns: 1, // The number of times to run Lighthouse
      url: ["http://localhost:4173"], // A URL to run Lighthouse on.
    },
    assert: {
      // assertions: {
      //   "categories:performance": ["warn", { minScore: 0.9 }],
      //   "categories:accessibility": ["error", { minScore: 1 }],
      //   // ...
      // },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci_reports",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
    },
    server: {},
    wizard: {},
  },
};

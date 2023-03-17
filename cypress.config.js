module.exports = {
  viewportWidth: 2560,
  viewportHeight: 1600,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "mochawesome-report",
    overwrite: false,
    html: false,
    json: true,
  },

  videosFolder: "./cypress/videos",
  screenshotsFolder: "./cypress/screenshots",

  e2e: {
    specPattern: "**/*.cy.js",
    setupNodeEvents() {},
  },
};

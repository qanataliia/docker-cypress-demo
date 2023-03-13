const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://uat.capitalise.com',
    viewportWidth: 2560,
    viewportHeight: 1600,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

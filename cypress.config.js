const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: 
    
    {
      reportDir: 'cypress/results',        // Directory to save the report
      overwrite: true,                    // Whether or not to overwrite the existing report
      html: true,                          // Generate an HTML report
      json: true,                          // Generate a JSON report
      // reportFilename: 'mochawesome'   // if you want you can give this also 
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

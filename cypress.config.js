const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://st.storabble.etondigital.com/en',
    setupNodeEvents(on, config) {
      // dodatna podešavanja ako budu potrebna
    }
  },
  env: {
    BASIC_AUTH_USER: 'storabble',
    BASIC_AUTH_PASS: 'ed2023'
  }
});




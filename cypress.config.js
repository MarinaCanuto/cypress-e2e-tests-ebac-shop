const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',

  reporterOptions: {
    endpoint: 'https://demo.reportportal.io/api/v1',
    apiKey: process.env.RP_API_KEY,
    project: 'default_personal',
    launch: 'Testes Cypress EBAC',
    description: 'Execução de testes Cypress EBAC',
    attributes: [
      {
        key: 'framework',
        value: 'cypress'
      }
    ],
    mode: 'DEFAULT'
  },

  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {}
  }
})
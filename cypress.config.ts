import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'

import { esbuildPreprocessor } from './src/support/plugins'

dotenv.config()

export default defineConfig({
  projectId: process.env.PROJECT_ID,
  e2e: {
    setupNodeEvents(on, config) {
      esbuildPreprocessor(on)

      return config
    },
    baseUrl: process.env.BASE_URL,
    video: false,
    supportFile: 'src/support/e2e.ts',
    specPattern: 'src/e2e/**/*.cy.ts',
    fixturesFolder: 'src/fixtures',
    supportFolder: 'src/support',
    chromeWebSecurity: false,
    experimentalFetchPolyfill: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
})

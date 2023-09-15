import createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

export const esbuildPreprocessor = (on: Cypress.PluginEvents) => {
  on(
    'file:preprocessor',
    createBundler({
      tsconfig: 'tsconfig.esbuild.json',
    }),
  )
}

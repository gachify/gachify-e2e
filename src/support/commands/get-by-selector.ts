export {}

declare global {
  namespace Cypress {
    interface Chainable {
      getBySelector: typeof getBySelector
    }
  }
}

const getBySelector = (selector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(`[data-cy='${selector}']`)
}

Cypress.Commands.add('getBySelector', getBySelector)

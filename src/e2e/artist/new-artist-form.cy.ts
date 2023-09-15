import { newArtistPath } from '@routes'
import { newArtistFormSelectors } from '@selectors'

describe('new artist form', () => {
  beforeEach(() => {
    cy.visit(newArtistPath)
  })

  it('should display name text field', () => {
    cy.getBySelector(newArtistFormSelectors.nameTextField).should('be.visible').should('have.text', '')
  })

  it('should display youtube url text field', () => {
    cy.getBySelector(newArtistFormSelectors.youtubeUrlTextField).should('be.visible').should('have.text', '')
  })

  it('should display create button', () => {
    cy.getBySelector(newArtistFormSelectors.createButton).should('be.visible').should('be.disabled')
  })

  it('should display enable create button after filling fields', () => {
    cy.getBySelector(newArtistFormSelectors.nameTextField).type('a')
    cy.getBySelector(newArtistFormSelectors.youtubeUrlTextField).type('a')
    cy.getBySelector(newArtistFormSelectors.createButton).should('be.visible').should('be.enabled')
  })
})

import { TEST_ID_ADD_NOTE_BUTTON } from '../../src/testIdentifiers'
import testId from '../support/utils/testId'

describe('Selecting notes', () => {
  it('should allow clicking on list items to select notes', () => {
    cy.visit('/')
    cy.get(testId(TEST_ID_ADD_NOTE_BUTTON)).click()
    cy.get('li[style="font-weight: bolder;"]').should('not.exist')
    cy.get('ul>li:first').click()
    cy.get('li[style="font-weight: bolder;"]').should('exist')
  })

  it('should only allow one selected note at a time', () => {
    cy.visit('/')
    cy.get(testId(TEST_ID_ADD_NOTE_BUTTON)).click()
    cy.get(testId(TEST_ID_ADD_NOTE_BUTTON)).click()
    cy.get('ul li:first').click()
    cy.get('li[style="font-weight: bolder;"]')
      .should('exist')
      .and('have.length', 1)
    cy.get('ul>li')
      .eq(1)
      .click()
    cy.get('li[style="font-weight: bolder;"]')
      .should('exist')
      .and('have.length', 1)
  })
})

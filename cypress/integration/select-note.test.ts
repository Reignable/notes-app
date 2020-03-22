import testId from '../support/utils/testId'
import {
  TEST_ID_ADD_NOTE_BUTTON,
  TEST_ID_NOTES_LIST_ITEM,
} from '../../src/testIdentifiers'

describe('Selecting notes', () => {
  it('should allow clicking on list items to select notes', () => {
    cy.visit('/')
    cy.get(testId(TEST_ID_ADD_NOTE_BUTTON)).click()
    cy.get('li[style="font-weight: bolder;"]').should('not.exist')
    cy.get(testId(`${TEST_ID_NOTES_LIST_ITEM}-0`)).click()
    cy.get('li[style="font-weight: bolder;"]').should('exist')
  })

  it('should only allow one selected note at a time', () => {
    cy.visit('/')
    cy.get(testId(TEST_ID_ADD_NOTE_BUTTON)).click()
    cy.get(testId(TEST_ID_ADD_NOTE_BUTTON)).click()
    cy.get(testId(`${TEST_ID_NOTES_LIST_ITEM}-0`)).click()
    cy.get('li[style="font-weight: bolder;"]')
      .should('exist')
      .and('have.length', 1)
    cy.get(testId(`${TEST_ID_NOTES_LIST_ITEM}-1`)).click()
    cy.get('li[style="font-weight: bolder;"]')
      .should('exist')
      .and('have.length', 1)
  })
})

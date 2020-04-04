import testId from '../support/utils/testId'

describe('Adding notes', () => {
  it('should display a new note in the list when the button is clicked', () => {
    cy.visit('/')
    cy.get(testId('add-note-button')).click()
    cy.get('ul>li').should('exist')
  })
})

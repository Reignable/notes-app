describe('Deleting notes', () => {
  it('should remove the deleted note from the list', () => {
    cy.visit('/')
    cy.contains('Add Note').click()
    cy.get('ul>li').should('have.length', 1)
    cy.contains('Delete').click()
    cy.get('ul>li').should('not.exist')
  })

  it('should only remove one note', () => {
    cy.visit('/')
    cy.contains('Add Note').dblclick()
    cy.get('ul>li').should('have.length', 2)
    cy.get('button:contains(Delete)')
      .eq(1)
      .click()
    cy.get('ul>li').should('have.length', 1)
  })
})

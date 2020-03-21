describe('first test', () => {
  it("doesn't do much", () => {
    cy.visit('/')
    cy.get('[data-testid=app-root]').contains('Hello')
  })
})

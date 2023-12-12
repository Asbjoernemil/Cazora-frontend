describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit("http://localhost:5173")

    cy.contains('Gallery').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/gallery')

    // Get an input, type into it
    cy.contains('Contact').click()
    cy.contains('About').click()
    cy.contains('Admin').click()
    cy.get('img[title=Cazo-RAH]').click()
    cy.contains('Admin').click()
    cy.contains('Redigér').click()
    
  })
})
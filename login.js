describe('Login to bench', () => {
    it('Logs in to bench', () => {
        cy.visit('localhost:8000/login')
        cy.contains('Username')
        cy.get('input[name="username"]')
            .type('nakamura9a')
        cy.get('input[name="password"]')
            .type('audacity123')
        cy.get('button.btn-block')
            .click()
        cy.wait(500)
        cy.url().should('include', '/home')
        
    })
  })
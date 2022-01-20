const utils = require('../utils.js')
  
describe("Currency", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a currency", () => {
        cy.visit('/create/accounting/currency')
        cy.get('#id_name')
            .type("MiDolla")
        cy.get('#id_symbol')
            .type("#")
        cy.get('input[type="submit"]')
            .click()
        cy.url().should('include', 'list/accounting/currency')
        cy.get('table .list-link:first')
            .click()
        cy.get('#delete-form button')
            .click()
    });
 
  });
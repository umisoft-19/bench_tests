const utils = require('../utils.js')
  
describe("Currency", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a currency", () => {
        cy.visit('/app/create/accounting/currency')
        cy.get('#id_name')
            .type("MiDolla")
        cy.get('#id_symbol')
            .type("#")
        utils.submit()
        cy.url().should('include', 'update/accounting/currency')
        utils.delete()
    });
 
  });
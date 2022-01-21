const utils = require('../utils.js')
  
describe("Tax", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a tax", () => {
        cy.visit('/app/create/accounting/tax')
        cy.get('#id_name')
            .type("VAT 202x")
        cy.get('#id_rate')
            .type("15")
        utils.submit()
        cy.url().should('include', 'update/accounting/tax')
        utils.delete()
    });
 
  });
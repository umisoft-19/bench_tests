const utils = require('../utils.js')
  
describe("Quotation", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a quotation", () => {
        cy.visit('/app/create/invoicing/quotation')

        utils.select('customer', "first")
        utils.select('product', "first")
        cy.get("input[name='quantity']")
            .first()
            .type(1)
        cy.get('.add-row-btn')
            .click()
        utils.submit()
        cy.url().should('include', 'update/invoicing/quotation')
    });
 
  });
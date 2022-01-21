const utils = require('../utils.js')
  
describe("Sales Settings", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should set invoice comments", () => {
        cy.visit('/app/update/invoicing/salesconfig/1')
        cy.get('#id_default_invoice_comments')
            .clear()
            .type("Thank you for your business")
        utils.submit()
        cy.visit('/app/create/invoicing/invoice/')
        cy.get('#id_comments')
            .should('contain', 'Thank you for your business')

    });
 
  });
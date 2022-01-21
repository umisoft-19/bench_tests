const utils = require('../utils.js')
  
describe("Customer", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("create credit customer", () => {
        cy.visit('/app/create/invoicing/customer/')
        cy.get('#id_customer_name')
            .type("Credit Customer")
        utils.select("billing_currency", "first")
        utils.submit()
        cy.url().should('contain', '/app/update/invoicing/customer')
        utils.delete()
    });

    it("create cash customer", () => {
        cy.visit('/app/create/invoicing/customer/')
        cy.get('#id_customer_name')
            .type("Cache Customer")
        utils.select("billing_currency", "first")
        cy.get('#id_cash_sale')
            .check()
        utils.select("cash_sale_account", "first")
        utils.submit()
        cy.url().should('contain', '/app/update/invoicing/customer')
        utils.delete()
    });
 
  });
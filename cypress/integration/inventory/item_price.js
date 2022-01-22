const utils = require('../utils.js')
  
describe("Item Price", () => {
    before(cy.login)
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });

    it("should create a category", () => {
        cy.visit('/app/create/inventory/itemprice')
        utils.select("item", "first")
        utils.select("currency", "first")
        cy.get("#id_selling")
            .check()
        cy.get("#id_buying")
            .uncheck()
        cy.get("#id_rate")
            .clear()
            .type("50.00")
        utils.submit()
        cy.url().should('include', '/app/update/inventory/itemprice')
        utils.delete()
    });
  });
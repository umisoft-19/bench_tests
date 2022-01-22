const utils = require('../utils.js')
  
describe("Category", () => {
    before(cy.login)
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });

    it("should create a category", () => {
        cy.visit('/app/create/inventory/category')
        cy.get('#id_name')
            .type("Inventory Category")
        cy.get('#id_description')
            .type("Some kind of inventory category")
        utils.submit()
        cy.url().should('include', '/app/update/inventory/category')
        utils.delete()
    });
  });
const utils = require('../utils.js')
  
describe("Inventory Settings", () => {
    before(cy.login)
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });

    it("should set the default warehouse", () => {
        cy.visit('/app/update/inventory/inventorysettings/1')
        utils.select("default_warehouse", "first")
        utils.submit()
        cy.url().should('include', '/app/update/inventory/inventorysettings')
        cy.visit('/app/create/inventory/order/')
        cy.get("#ship_to_visible_input")
            .should("not.be.empty")
    });
  });
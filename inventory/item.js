const utils = require('../utils.js')
  
describe("Item", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an item(product)", () => {
        cy.visit('/create/inventory/item/?type=0')
        // TODO found bug with the search fields
        cy.get('#id_name')
            .type("Roller Bearing")
        cy.get('#id_unit_purchase_price')
            .type("20")
        cy.get('#id_description')
            .type("Used as a heavy duty bearing for large lateral forces 25mm.")
        cy.get('input[type="submit"]')
            .click()
        cy.url().should('include', 'list/inventory/item')
        cy.get('table .list-link:first')
            .click()
        cy.get('#delete-form button')
            .click()
    });
 
  });
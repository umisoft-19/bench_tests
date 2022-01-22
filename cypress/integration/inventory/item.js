const utils = require('../utils.js')
  
describe("Item", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });

    it("should create an item(product)", () => {
        cy.visit('/app/create/inventory/item/?type=0')
        // TODO found bug with the search fields
        cy.get('#id_name')
            .type("Roller Bearing")
        // cannot delete with initial quantity
        // set these values to zero, test the other branches in unit 
        //tests
        cy.get('#id_initial_unit_price')
            .type("0")
        cy.get('#id_initial_quantity')
            .type("0")
        cy.get('#id_description')
            .type("Used as a heavy duty bearing for large lateral forces 25mm.")
        utils.select("category", "first")
        utils.select("tax", "first")
        utils.submit()
        cy.url().should('include', 'update/inventory/item')
        utils.delete()
    });
 
  });
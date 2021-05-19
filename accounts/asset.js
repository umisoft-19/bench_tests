const utils = require('../utils.js')
  
describe("Asset", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an asset", () => {
        cy.visit('/create/accounting/asset')
        cy.get('#id_name')
            .type("Honda Fit")
        cy.get('#id_initial_value')
            .type("2000.00")
        cy.get('#id_salvage_value')
            .type("800.00")
        cy.get('#id_depreciation_period')
            .type('5')
        cy.get('#id_init_date') // date_purchased
            .type("2021-01-01")
        cy.get('#id_description')
            .type("Second hand vehicle imported from Japan")
        utils.select('category', 3) // motor vehicles
        utils.select('credit_account', 33) // motor vehicles
        cy.get('input[type="submit"]')
            .click()
        cy.url().should('include', 'list/accounting/asset')
        cy.get('table .list-link:first')
            .click()
        cy.get('#delete-form button')
            .click()
    });
 
  });
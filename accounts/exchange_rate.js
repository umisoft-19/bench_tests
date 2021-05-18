const utils = require('../utils.js')
  
describe("Exchange Rate", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an exchange rate", () => {
        cy.visit('/create/accounting/exchangerate')
        cy.get('#id_date')
            .type("2021-01-01")
        utils.select('from_currency', 1)
        utils.select('to_currency', 7) // deleted other currencies, should be 2
        cy.get('#id_exchange_rate')
            .type("1.00")
        cy.get('input[type="submit"]')
            .click()
        cy.url().should('include', 'list/accounting/exchangerate')
    });
 
  });
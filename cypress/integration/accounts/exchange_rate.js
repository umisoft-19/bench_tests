const utils = require('../utils.js')
  
describe("Exchange Rate", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an exchange rate", () => {
        cy.visit('/app/create/accounting/exchangerate')
        utils.setDate('date', "01/20/2022")
        utils.select('from_currency', 'first')
        utils.select('to_currency', 'last') // deleted other currencies, should be 2
        cy.get('#id_exchange_rate')
            .type("1.00")
        utils.submit()
        cy.url().should('include', 'update/accounting/exchangerate')
    });
 
  });
const utils = require('../utils.js')
  
describe("Account", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an account", () => {
        cy.visit('/create/accounting/account')
        cy.get('#id_name')
            .type("Petty Cash Account")
        cy.get('#id_account_number')
            .type("200-002-035")
        cy.get('#id_type')
            .select('asset')
        cy.get('#id_balance')
            .type("0.00")
        cy.get('#id_description')
            .type("Used to carry cash for day to day expenses not exceeding $20.00")
        utils.select('parent_account', 26) // current assets
        cy.get('input[type="submit"]')
            .click()
        cy.url().should('include', 'list/accounting/account')
        cy.get('table .list-link:first')
            .click()
        cy.get('#delete-form button')
            .click()
    });
 
  });
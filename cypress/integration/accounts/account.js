const utils = require('../utils.js')
  
describe("Account", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an account", () => {
        cy.visit('/app/create/accounting/account')
        cy.get('#id_name')
            .type("Petty Cash Account")
        cy.get('#id_account_number')
            .type("200-002-040")
        cy.get('#id_type')
            .select('asset')
        cy.get('#id_balance')
            .type("0.00")
        cy.get('#id_description')
            .type("Used to carry cash for day to day expenses not exceeding $20.00")
        utils.select('parent_account', 26) // current assets
        utils.select('account_currency', 1) 
        cy.get('#id_submit_btn')
            .click()
        cy.url().should('include', '/app/update/accounting/account')
        cy.get('button .fa-trash-alt')
            .click()
    });
 
  });
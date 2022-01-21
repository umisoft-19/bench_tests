const utils = require('../utils.js')


describe("Expense", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an expense", () => {
        cy.visit('/app/create/accounting/expense')
        cy.get('#id_amount')
            .type("10.00")
        utils.setDate('date', "01/20/2022")
        utils.select('debit_account', "first") // labelled expense to
        cy.get('#id_description')
            .type("Some random expense")
        utils.select('category', 'first') // labelled overhead ledger code
        
        utils.submit()
        cy.url().should('include', 'update/accounting/expense')
        utils.submit()
        cy.url().should('include', 'update/accounting/expense')
    });
 
  });
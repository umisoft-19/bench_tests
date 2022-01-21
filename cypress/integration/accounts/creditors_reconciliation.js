const utils = require('../utils.js')
  
describe("Creditors Reconciliation", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a creditors reconciliation", () => {
        cy.visit('/app/create/accounting/creditorsreconciliation')
        utils.setDate("reconciliation_date", "01/01/2022")
        utils.select("creditor", "first") // labelled as payment method
        cy.get('tbody tr')
            .first()
            .click()
        cy.get('tbody tr')
            .first()
            .get("input[type=checkbox]")
            .first()
            .click()
        cy.get('#title-text')
            .click()
        cy.get('#id_closing_account_balance')
            .invoke("val")
            .then(val => {
                cy.get("#id_statement_balance")
                    .type(val)
                utils.submit()
                cy.url().should('include', 'update/accounting/creditorsreconciliation')
                utils.delete()
            }) 
    });
 
  });
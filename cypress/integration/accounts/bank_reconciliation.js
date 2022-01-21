const utils = require('../utils.js')
  
describe("Bank Reconciliation", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a bank reconciliation", () => {
        cy.visit('/app/create/accounting/bankreconciliation')
        utils.setDate("reconciliation_date", "01/01/2022")
        utils.select("cashbook", "first") // labelled as payment method
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
        cy.get('#id_closing_cashbook_balance')
            .invoke("val")
            .then(val => {
                cy.get("#id_statement_balance")
                    .type(val)
                utils.submit()
                cy.url().should('include', 'update/accounting/bankreconciliation')
                // utils.delete()
            }) 
    });
 
  });
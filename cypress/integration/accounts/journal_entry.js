const utils = require('../utils.js')
  
describe("Journal Entries", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a journal entry", () => {
        cy.visit('/app/create/accounting/journalentry')
        // utils.setDate("date", "01/01/2022")
        cy.get('#id_memo')
            .type("Some description for a journal entry")
        utils.select('account', 4)
        cy.get("input[name='credit']")
            .first()
            .type(10)
        cy.get('.add-row-btn')
            .click()
        utils.select('account', 31)
        cy.get("input[name='debit']")
            .first()
            .type(10)
        cy.get('.add-row-btn')
            .click()
        utils.submit()
        cy.url().should('include', 'update/accounting/journalentry')
    });
 
  });
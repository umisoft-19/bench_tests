const { gzipSync } = require("zlib")
const utils = require('../utils.js')
  
describe("Journal Entries", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a journal entry", () => {
        cy.visit('/create/accounting/journalentry')
        // cy.get('#id_date')
        //     .type("2021-05-18")
        utils.select('recorded_by', 1)
        cy.get('#id_memo')
            .type("Some description for a journal entry")
        utils.select('account', 4)
        cy.get("input[name='credit']")
            .type(10)
        cy.get('.add-row-btn')
            .click()
        utils.select('account', 31)
        cy.get("input[name='debit']")
            .type(10)
        cy.get('.add-row-btn')
            .click()
        cy.get('input[type="submit"]')
        .click()
        cy.url().should('include', 'update/accounting/journalentry')
    });
 
  });
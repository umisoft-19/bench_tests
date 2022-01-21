const utils = require('../utils.js')
  
describe("Accounting Period", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an accounting period", () => {
        cy.visit('/app/create/accounting/accountingperiod')
        cy.get('#id_name')
            .type("Period 001")
        cy.get('#div_id_start input')
            .type("01/01/2022")
        cy.get('#title-text').click() // blur input
        cy.get('#div_id_end input')
            .type("01/31/2022")
        cy.get('#title-text').click() // blur input
        utils.select('fiscal_year', 1) 
        cy.get('#id_submit_btn')
            .click()
        cy.url().should('include', '/app/update/accounting/accountingperiod')
        cy.get('button .fa-trash-alt')
            .click()
    });
 
  });
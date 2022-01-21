const utils = require('../utils.js')
  
describe("Fiscal Year", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a fiscal year", () => {
        cy.visit('/app/create/accounting/fiscalyear')
        cy.get('#id_name')
            .type("FY202x")
        utils.setDate('start', "01/01/2022")
        utils.setDate('end', "12/01/2022")
        utils.submit()
        cy.url().should('include', 'update/accounting/fiscalyear')
        utils.delete()
    });
 
  });
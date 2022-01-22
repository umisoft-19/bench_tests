const utils = require('../utils.js')
  
describe("Leave", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a department", () => {
        cy.visit('/app/create/employees/leave')
        utils.setDate("start_date", "01/01/2022")
        utils.setDate("end_date", "01/01/2022")
        cy.get('#id_category')
            .select("1")
        utils.select('employee', "first")
        cy.get('#id_notes')
            .type("I just want to go on holiday")
        utils.submit()
        cy.url().should('include', '/app/update/employees/leave')
        utils.delete()
    });
  });
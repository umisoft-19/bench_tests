const utils = require('../utils.js')
  
describe("Termination", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a termination", () => {
        cy.visit('/app/create/employees/contract')
        utils.setDate("start_date", "01/01/2020")
        utils.setDate("end_of_probation", "01/03/2020")
        utils.select('employee', "first")
        cy.get('#id_employee_category')
            .select("Temporary")
        utils.submit()
        cy.url().should('include', '/app/update/employees/contract')

        cy.visit('/app/create/employees/termination')
        utils.setDate("date", "01/01/2022")
        utils.select('contract', "last")
        utils.submit()
        cy.url().should('include', '/app/update/employees/termination')
        utils.delete()
    });
  });
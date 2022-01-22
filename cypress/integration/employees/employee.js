const utils = require('../utils.js')
  
describe("Employee", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an employee", () => {
        cy.visit('/app/create/employees/employee')
        cy.get('#id_first_name')
            .type("Temporary")
        cy.get('#id_last_name')
            .type("Employee")
        cy.get('#id_username')
            .type("Employee")
        cy.get('#id_password')
            .type("Employee123!")
        utils.select('roles', "first")
        utils.submit()
        cy.url().should('include', '/app/update/employees/employee')
        utils.delete()
    });
  });
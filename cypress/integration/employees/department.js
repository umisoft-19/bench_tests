const utils = require('../utils.js')
  
describe("Department", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a department", () => {
        cy.visit('/app/create/employees/department')
        cy.get('#id_name')
            .type("Temporary")
        utils.select('manager', "first")
        utils.select('employees', "first")
        utils.submit()
        cy.url().should('include', '/app/update/employees/department')
        utils.delete()
    });
  });
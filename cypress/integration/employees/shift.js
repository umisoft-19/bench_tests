const utils = require('../utils.js')
  
describe("Shift", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a shift", () => {
        cy.visit('/app/create/employees/shift')
        cy.get('#id_name')
            .type("C Shift")
        utils.select('supervisor', "first")
        utils.select('employees', "first")
        utils.submit()
        cy.url().should('include', '/app/update/employees/shift')
        utils.delete()
    });
  });
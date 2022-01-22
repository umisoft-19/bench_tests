const utils = require('../utils.js')
  
describe("Shift Schedule", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a shift schedule", () => {
        cy.visit('/app/create/employees/shiftschedule')
        cy.get('#id_name')
            .type("C Shift Schedule")
        utils.setDate("valid_from", "01/01/2022")
        utils.setDate("valid_to", "12/31/2022")
        utils.select('shift', "first")
        cy.get("input[name='start_time']")
            .first()
            .type("0800")
        cy.get("input[name='end_time']")
            .first()
            .type("1700")
        cy.get("input[name='monday']")
            .first()
            .check()
        utils.submit()
        cy.url().should('include', '/app/update/employees/shiftschedule')
        utils.delete()
    });
  });
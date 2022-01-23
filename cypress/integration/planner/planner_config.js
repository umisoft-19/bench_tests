const utils = require('../utils.js')
  
describe("Planner Config", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should update planner settings", () => {
        cy.visit('/app/update/planner/plannerconfig/1')
        cy.get('#id_number_of_agenda_items')
            .clear()
            .type("10")
        utils.submit()
        cy.url().should('include', '/app/update/planner/plannerconfig')
        
    });
  });
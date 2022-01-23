const utils = require('../utils.js')
  
describe("Event", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an event", () => {
        cy.visit('/app/create/planner/event')
        utils.setDate("date", "01/21/2022")
        cy.get('#id_label')
            .type("0800")
        cy.get('#id_description')
            .type("The Z Team's job")
        utils.dynamicSelect('participant', 'first', "first") 
        utils.submit()
        cy.url().should('include', '/app/update/planner/event')
        utils.delete()
    });
  });
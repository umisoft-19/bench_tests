const utils = require('../utils.js')
  
describe("Sales Team", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an sales team", () => {
        cy.visit('/app/create/crm/salesteam')
        cy.get('#id_name')
            .type("The Z Team")
        cy.get('#id_description')
            .type("The Z Team's description")
        utils.select('leader', 'first') 
        utils.select('members', 'first') 
        utils.submit()
        cy.url().should('include', '/app/update/crm/salesteam')
        utils.delete()
    });
  });
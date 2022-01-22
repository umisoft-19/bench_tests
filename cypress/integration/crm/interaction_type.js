const utils = require('../utils.js')
  
describe("Interaction Type", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an interaction", () => {
        cy.visit('/app/create/crm/interactiontype')
        cy.get('#id_name')
            .type("INT TYPE")
        cy.get('#id_description')
            .type("Some new interaction type")
        utils.submit()
        cy.url().should('include', '/app/update/crm/interactiontype')
        utils.delete()
    });
  });
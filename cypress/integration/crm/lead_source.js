const utils = require('../utils.js')
  
describe("Lead Source", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a lead source", () => {
        cy.visit('/app/create/crm/leadsource')
        cy.get('#id_name')
            .type("Source")
        cy.get('#id_description')
            .type("Some new lead source")
        utils.submit()
        cy.url().should('include', '/app/update/crm/leadsource')
        utils.delete()
    });
  });
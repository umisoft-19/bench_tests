const utils = require('../utils.js')
  
describe("Interaction", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an interaction", () => {
        cy.visit('/app/create/crm/interaction')
        cy.get('#id_description')
            .type("Some new category")
        utils.select('lead', 'first') 
        utils.select('type', 'first') 
        utils.select('contact', 'first') 
        utils.submit()
        cy.url().should('include', '/app/update/crm/interaction')
        utils.delete()
    });
  });
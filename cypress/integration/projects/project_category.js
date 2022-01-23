const utils = require('../utils.js')
  
describe("Project Category", () => {
    before(cy.login)
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });

    it("should create a project category", () => {
        cy.visit('/app/create/services/projectcategory')
        cy.get('#id_name')
            .type("Project Category")
        cy.get('#id_description')
            .type("Some kind of project category")
        utils.submit()
        cy.url().should('include', '/app/update/services/projectcategory')
        utils.delete()
    });
  });
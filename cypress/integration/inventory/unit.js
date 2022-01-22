const utils = require('../utils.js')
  
describe("Units Of Measure", () => {
    before(cy.login)
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });

    it("should create a unit of measure", () => {
        cy.visit('/app/create/inventory/unitofmeasure')
        cy.get('#id_name')
            .type("Nox")
        cy.get('#id_description')
            .type("Some kind of unit")
        utils.submit()
        cy.url().should('include', '/app/update/inventory/unitofmeasure')
        utils.delete()
    });
  });
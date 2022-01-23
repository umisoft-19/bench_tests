const utils = require('../utils.js')
  
describe("Project", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an project", () => {
        cy.visit('/app/create/services/project')
        cy.get('#id_name')
            .type("The A Project")
        cy.get('#id_description')
            .type("The A project description")
        utils.select('invoice', 'first') 
        utils.select('category', 'first') 
        utils.setDate("start_date", "01/20/2022")
        utils.setDate("end_date", "01/30/2022")
        cy.get("#id_duration")
            .type("1d")
        utils.submit()
        cy.url().should('include', '/app/update/services/project')
        utils.delete()
    });
  });
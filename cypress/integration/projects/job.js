const utils = require('../utils.js')
  
describe("Job", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an Job", () => {
        cy.visit('/app/create/services/job')
        utils.setDate("date", "01/21/2022")
        cy.get('#id_time')
            .type("0800")
        cy.get('#id_description')
            .type("The Z Team's job")
        cy.get('#id_status')
            .type("progress")
        utils.select('team', 'first') 
        utils.select('staff', 'first') 
        utils.submit()
        cy.url().should('include', '/app/update/services/job')
        utils.delete()
    });
  });
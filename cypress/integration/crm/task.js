const utils = require('../utils.js')
  
describe("Task", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a task", () => {
        cy.visit('/app/create/crm/task')
        cy.get('#id_title')
            .type("Do this")
        cy.get('#id_description')
            .type("Doing it right")
        utils.select('lead', 'first') 
        utils.select('assigned', 'first') 
        utils.setDate("due", "01/20/2022")
        utils.submit()
        cy.url().should('include', '/app/update/crm/task')
        utils.delete()
    });
  });
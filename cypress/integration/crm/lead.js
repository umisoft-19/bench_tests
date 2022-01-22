const utils = require('../utils.js')
  
describe("Lead", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a lead", () => {
        cy.visit('/app/create/crm/lead')
        cy.get('#id_title')
            .type("New Lead")
        utils.select('lead_owner', 'first') 
        utils.select('contacts', 'first') 
        utils.select('source', 'first')
        cy.get('#id_opportunity')
            .type("20.00")
        cy.get('#id_status')
            .select("new")
        utils.setDate('reminder', '01/20/2022')
        cy.get('#id_description')
            .type("Some new lead")
        utils.submit()
        cy.url().should('include', '/app/update/crm/lead')
        utils.delete()
    });
  });
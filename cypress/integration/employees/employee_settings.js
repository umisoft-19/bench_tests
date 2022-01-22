const utils = require('../utils.js')
  
describe("Employee Settings", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should update employee settings", () => {
        cy.visit('/app/update/employees/employeessettings/1')
        cy.get('#id_business_social_security_number')
            .clear()
            .type("SSN001")
        utils.submit()
        cy.url().should('include', '/app/update/employees/employeessettings')
    });
  });
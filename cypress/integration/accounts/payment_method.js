const utils = require('../utils.js')
  
describe("Payment method", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a payment method", () => {
        cy.visit('/app/create/accounting/paymentmethod')
        utils.select("account", "first")
        cy.get('#id_name')
            .type("Cash In some currency")
        
        utils.syncWait(500, () => {
            utils.submit()
            cy.url().should('include', 'update/accounting/paymentmethod')
            utils.delete()
        }) 
    });
 
  });
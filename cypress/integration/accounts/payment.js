const utils = require('../utils.js')
  
describe("Payment", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a payment", () => {
        cy.visit('/app/create/accounting/payment')
        utils.setDate("date", "01/01/2022")
        cy.get('#id_payment_type')
            .select("receive")
        utils.dynamicSelect("voucher", "first", "last")
        utils.select("method", "first") // labelled as payment method
        cy.get('#id_amount')
            .type("1")
        cy.get('#id_reference_number')
            .type("15")
        cy.get('#id_memo')
            .type("I am writing a long memo for the sake of unit testing.")
        utils.submit()
        cy.url().should('include', 'update/accounting/payment')
        utils.delete()
    });
 
  });
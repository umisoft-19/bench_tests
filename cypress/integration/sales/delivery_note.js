const utils = require('../utils.js')

describe("Sales Invoices", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create a delivery note", () => {
    cy.visit('/app/create/invoicing/deliverynote/')
    utils.select('invoice', "last")
    utils.setDate("date", "01/20/2022")
    cy.get("#id_comments")
        .type("Some delivery note")
    cy.get('tbody tr')
        .first()
        .click()  
    cy.get("input[name=quantity]")
        .first()
        .type("1")
    cy.get("#title-text")
        .click()  
    utils.submit()
    cy.url().should('include', 'update/invoicing/deliverynote')
  });

})
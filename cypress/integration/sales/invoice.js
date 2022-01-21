const utils = require('../utils.js')

describe("Sales Invoices", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create a credit invoice", () => {
   cy.visit('/app/create/invoicing/invoice/?cash_sale=False')
   utils.select('customer', "first")
   utils.select('product', "first")
   
   cy.get('.add-row-btn')
    .click()
    utils.select('ship_from', "first")
    utils.submit()
    cy.url().should('include', 'update/invoicing/invoice')
  });

  it("should create a cash invoice", () => {
    cy.visit('/app/create/invoicing/invoice/?cash_sale=True')
    utils.select('customer', "first")
    utils.select('product', "first")
    cy.get('.add-row-btn')
      .click()
    utils.select('ship_from', "first")
    utils.submit()
      cy.url().should('include', 'update/invoicing/invoice')
  });

});
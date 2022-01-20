const utils = require('../utils.js')

describe("Sales Invoices", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create a credit invoice", () => {
   cy.visit('/create/invoicing/invoice/?cash_sale=False')
   utils.select('customer', 1)
   utils.select('product', 1)
   cy.get('.add-row-btn')
    .click()
   cy.get('input[type="submit"]')
    .click()
    cy.url().should('include', 'update/invoicing/invoice')
  });

  it("should create a cash invoice", () => {
    cy.visit('/create/invoicing/invoice/?cash_sale=True')
    utils.select('product', 1)
    cy.get('.add-row-btn')
      .click()
    cy.get('input[type="submit"]')
      .click()
      cy.url().should('include', 'update/invoicing/invoice')
  });

});
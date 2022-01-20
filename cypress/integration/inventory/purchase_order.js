const utils = require('../utils.js')

describe("Purchase Orders", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create a credit purchase", () => {
   cy.visit('/create/inventory/order/?cash_purchase=False')
   cy.get('#id_date')
    .type('2021-01-01')
   cy.get('#id_expected_receipt_date')
    .type('2021-01-02')
    cy.get('#id_due')
    .type('2021-01-07')
   utils.select('ship_to', 1)
   utils.select('item', 1)
   utils.select('unit', 1)
   cy.get('input[name="order_price"]')
    .type('23.45')
    cy.get('input[name="quantity"]')
    .type('3')
   cy.get('.add-row-btn')
    .click()
   cy.get('input[type="submit"]')
    .click()
    cy.url().should('include', 'update/inventory/order')
  });

  it("should create a cash purchase", () => {
    cy.visit('/create/inventory/order/?cash_purchase=True')
   utils.select('ship_to', 1)
   utils.select('item', 1)
   utils.select('unit', 1)
   cy.get('input[name="order_price"]')
    .type('23.45')
    cy.get('input[name="quantity"]')
    .type('3')
   cy.get('.add-row-btn')
    .click()
   cy.get('input[type="submit"]')
    .click()
      cy.url().should('include', 'update/inventory/order')
  });

});
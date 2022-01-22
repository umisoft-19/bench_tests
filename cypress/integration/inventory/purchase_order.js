const utils = require('../utils.js')

describe("Purchase Orders", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create a credit purchase", () => {
    cy.visit('/app/create/inventory/order/?cash_purchase=False')
    utils.setDate('date', '01/01/2022')
    utils.setDate('expected_receipt_date', '01/01/2022')
    utils.setDate('due', '01/01/2022')
    utils.select('supplier', "first")

    // utils.select('ship_to', "first")
    utils.select('item', "first")
    
    // utils.select('unit', "first")
    cy.get('input[name="order_price"]')
      .first()
      .type('23.45')
      cy.get('input[name="quantity"]')
      .first()
      .type('3')
    cy.get('.add-row-btn')
      .click()
    utils.submit()
    cy.url().should('include', 'update/inventory/order')
    utils.delete()
  });

  it("should create a cash purchase", () => {
      cy.visit('/app/create/inventory/order/?cash_purchase=True')
      utils.select('supplier', "first")
      utils.select('item', "first")
      // utils.select('unit', "first")
      cy.get('input[name="order_price"]')
        .first()
        .type('23.45')
      cy.get('input[name="quantity"]')
        .first()
        .type('3')
      cy.get('.add-row-btn')
        .click()
      utils.submit()
      cy.url().should('include', 'update/inventory/order')
      utils.delete()

  });

});
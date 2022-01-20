const utils = require('../utils.js')

describe("Customer", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create an individual supplier", () => {
   cy.visit('/create/inventory/supplier')
   cy.get('#id_supplier_name')
    .type('First Last')
   utils.select('billing_currency', 1)
   cy.get('#id_business_address')
    .type('1 Union Road \n City \n Country')
   cy.get('#id_phone_1')
    .type('011023024')
   cy.get('input[type="submit"]')
    .click()
    cy.url().should('include', 'list/inventory/supplier')
  });

  it("should create an organizational customer", () => {
    cy.visit('/create/inventory/supplier')
    cy.get('#id_supplier_name')
    .type('Company')
    cy.get('input[type="radio"]:first')
    .click()
   utils.select('billing_currency', 1)
   cy.get('#id_business_address')
    .type('1 Company Way \n City \n Country')
   cy.get('#id_phone_1')
    .type('011 222 333')
   cy.get('input[type="submit"]')
    .click()
    cy.url().should('include', 'list/inventory/supplier')
  });

});
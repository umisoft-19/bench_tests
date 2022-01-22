const utils = require('../utils.js')

describe("Customer", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create an individual supplier", () => {
      cy.visit('/app/create/inventory/supplier')
      cy.get('#id_supplier_name')
        .type('First Last')
      utils.select('billing_currency', "first")
      cy.get('#id_business_address')
        .type('1 Union Road \n City \n Country')
      cy.get('#id_phone_1')
        .type('011023024')
      utils.submit()
      cy.url().should('include', 'update/inventory/supplier')
      utils.delete()
  });

  it("should create an organizational customer", () => {
      cy.visit('/app/create/inventory/supplier')
      cy.get('#id_supplier_name')
        .type('Company')
      cy.get('#id_supplier_type')
        .select("organization")
      utils.select('billing_currency', "first")
      cy.get('#id_business_address')
        .type('1 Company Way \n City \n Country')
      cy.get('#id_phone_1')
        .type('011 222 333')
      utils.submit()
      cy.url().should('include', 'update/inventory/supplier')
      utils.delete()
  });

});
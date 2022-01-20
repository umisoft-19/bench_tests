const utils = require('../utils.js')

describe("Quotations", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create quotation", () => {
   cy.visit('/create/invoicing/quotation')
   utils.select('customer', 1)
   utils.select('product', 1)
   cy.get('.add-row-btn')
    .click()
   cy.get('input[type="submit"]')
    .click()
    cy.url().should('include', 'update/invoicing/quotation')
  });
});
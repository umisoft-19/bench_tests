const select = (field, option) => {
  cy.get(`#${field}_widget`)
    .click()
    cy.wait(250)
    cy.get(`#${field}_widget_opt_${option}`)
    .click()
}

describe("Authenticated sections", () => {
  before(() => {

    cy.visit("localhost:8000/login/");
    cy.get("[name=csrfmiddlewaretoken]")
      .should("exist")
      .should("have.attr", "value")
      .as("csrfToken");

    cy.get("@csrfToken").then((token) => {
      cy.request({
        method: "POST",
        url: "/login/", 
        form: true,
        body: {
          username: "nakamura9a",
          password: "audacity123",
        },
        headers: {
          "X-CSRFTOKEN": token,
        },
      });
    });

    cy.getCookie("sessionid").should("exist");
    cy.getCookie("csrftoken").should("exist");
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create a credit invoice", () => {
   cy.visit('localhost:8000/create/invoicing/invoice/?cash_sale=False')
   select('customer', 1)
   select('item', 1)
   cy.get('.invoice-btn')
    .click()
   cy.get('input[type="submit"]')
    .click()
    cy.url().should('include', 'update/invoicing/invoice')
  });

  it("should create a cash invoice", () => {
    cy.visit('localhost:8000/create/invoicing/invoice/?cash_sale=True')
    select('customer', 1)
    select('item', 1)
    cy.get('.invoice-btn')
      .click()
    cy.get('input[type="submit"]')
      .click()
      cy.url().should('include', 'update/invoicing/invoice')
  });

});
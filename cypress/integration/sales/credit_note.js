const utils = require('../utils.js')

describe("Credit Note", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create a credit note", () => {
        cy.visit('/app/create/invoicing/creditnote/')
        cy.get("#product_visible_input")
            .focus()
            .click()
        utils.select('invoice', "last")
        // type comments to allow time for ajax to run
        cy.get("#id_comments")
            .type("This is some random comment")
        utils.setDate("date", "01/20/2022")

        utils.select('product', "first")
        cy.get("input[name=quantity]")
                .first()
                .type("1")
        
        cy.get('.add-row-btn')
                .click()
        cy.get("#title-text")
            .click()
        utils.submit()
        cy.url().should('include', 'update/invoicing/creditnote')
  });

})
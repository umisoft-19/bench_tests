const utils = require('../utils.js')

describe("Debit Note", () => {
  before(cy.login);
  beforeEach(() => {
    Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
  });

  it("should create a debit note", () => {
        cy.visit('/app/create/inventory/debitnote/')
        cy.get("#item_visible_input")
            .focus()
            .click()
        utils.select('order', "last")
        // type comments to allow time for ajax to run
        cy.get("#id_comments")
            .type("This is some random comment")
        utils.setDate("date", "01/20/2022")
        utils.select('item', "first")
        cy.get("input[name=quantity]")
                .first()
                .type("1")

        cy.get('.add-row-btn')
                .click()
        cy.get("#title-text")
            .click()
        utils.submit()
        cy.url().should('include', 'update/inventory/debitnote')
        utils.delete()
  });

})
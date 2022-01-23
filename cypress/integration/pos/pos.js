const utils = require('../utils.js')
  
describe("Pos Sessions", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should cancel a session", () => {
        cy.visit('/app/pos/')
        cy.get("#cancel-session")
            .click()

        cy.url().should("include", "app/desktop/pos")
        
    });

    it("should create a quotation", () => {
        cy.visit('/app/pos/')
        cy.get("#start-session")
            .click()
        cy.get("#mode-btn")
            .click()
        cy.get("#mode-indicator")
            .should("contain", "Quote")
        utils.select("customer", "first")
        utils.select("item", 'first')
        cy.get("#qty-increment")
            .click()
        cy.get("#add-item")
            .click()
        cy.get("#checkout-btn")
            .click()
        
        cy.get("#submit-btn")
            .click()
        cy.get("#transaction-success p")
            .should("contain", "Document created successfully")
    });

    it("should create an invoice", () => {
        cy.visit('/app/pos/')
        cy.get("#start-session")
            .click()
        utils.select("customer", "first")
        utils.select("item", 'first')
        cy.get("#qty-increment")
            .click()
        cy.get("#add-item")
            .click()
        cy.get("#checkout-btn")
            .click()
        utils.select("payment_method", "first")

        cy.get("input[name=current_payment_amount]")
            .clear()
            .type("100.00")
        cy.get("#add-payment-btn")
            .click()
        cy.get("#add-payment-btn")
            .click()
        cy.get("#submit-btn")
            .click()
        cy.get("#transaction-success p")
            .should("contain", "Document created successfully")
    });

    it("should test dialogs", () => {
        cy.visit('/app/pos/')
        cy.get("#start-session")
            .click()
        // price check
        cy.get("#price-check-btn")
            .click()
        utils.select("product_price", "first")
        cy.get("#price-check-name")
            .should("not.be.empty")
        cy.get("#price_check_modal .close-btn")
            .click()
        // customers 
        cy.get("#customer-btn")
            .click()
        utils.select("customer_check", "first")
        cy.get("#customer_check_type")
            .should("not.be.empty")
        cy.get("#customer_modal .close-btn")
            .click()
        // void
        utils.select("customer", "first")
        utils.select("item", 'first')
        cy.get("#qty-increment")
            .click()

        cy.get("#void-btn")
            .click()

        cy.get("#void-sale-btn")
            .click()
        cy.get("input[name='current_item_qty']")
            .should("have.value", "0")
        cy.get("#customer_visible_input")
            .should("be.empty")
    });

  });
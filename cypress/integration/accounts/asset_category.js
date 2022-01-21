const utils = require('../utils.js')
  
describe("Asset Category", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an asset category", () => {
        cy.visit('/app/create/accounting/assetcategory')
        cy.get('#id_name')
            .type("New category")
        cy.get('#id_description')
            .type("Some new category")
        utils.select('account', 1) 
        utils.select('accumulated_depreciation_account', 2) 
        cy.get('#id_submit_btn')
            .click()
        cy.url().should('include', '/app/update/accounting/assetcategory')
        cy.get('button .fa-trash-alt')
            .click()
    });
  });
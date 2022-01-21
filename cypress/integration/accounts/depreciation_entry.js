const utils = require('../utils.js')
  
describe("Depreciation Entry", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create an asset", () => {
        cy.visit('/app/create/accounting/asset')
        cy.get('#id_name')
            .type("Honda Jazz")
        cy.get('#id_asset_number')
            .type("Mota 002")
        cy.get('#id_location')
            .type("Harare")
        cy.get('#id_serial_number')
            .type("SN002")
        cy.get('#id_depreciation_remaining')
            .type("60")
        cy.get('#id_initial_value')
            .type("2000.00")
        cy.get('#id_salvage_value')
            .type("800.00")
        cy.get('#id_depreciation_period')
            .type('5')
        utils.setDate('init_date', "01/01/2022") // date_purchased
        cy.get('#id_description')
            .type("Second hand vehicle imported from Japan")
        utils.select('category', 3) // motor vehicles
        utils.select('credit_account', 33) // motor vehicles
        utils.select('cost_account', 20) // current assets
        utils.submit()
        
    });
    it("should create a depreciation entry", () => {
        cy.visit('/app/create/accounting/depreciationentry')
        utils.setDate('date', "01/31/2022")
        utils.select('asset', 'last')
        utils.submit()
        cy.url().should('include', 'update/accounting/depreciationentry')
        utils.submit()
        cy.url().should('include', 'update/accounting/depreciationentry')
    })
  });
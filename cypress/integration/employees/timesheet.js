const utils = require('../utils.js')
  
describe("Time sheet", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should create a time sheet", () => {
        cy.visit('/app/create/employees/employeetimesheet')

        utils.select('employee', "first")
        cy.get('#id_month')
            .select("1")
        cy.get('#id_year')
            .select("2022")
        cy.get(`.react-datepicker-wrapper input`)
            .first()
            .type("01/01/2022")
        cy.get('#title-text').click()
        cy.get('input[name="time_in"]')
            .first()
            .type("0800")
        cy.get('input[name="time_out"]')
            .first()
            .type("1600")
        cy.get('input[name="lunch_duration"]')
            .first()
            .type("0100")

        cy.get('.add-row-btn')
            .click()
        utils.submit()
        cy.url().should('include', '/app/update/employees/employeetimesheet')
        utils.delete()
    });
  });
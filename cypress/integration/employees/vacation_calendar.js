const utils = require('../utils.js')
  
describe("Vacation Calendar", () => {
    before(cy.login)
  
    beforeEach(() => {
      Cypress.Cookies.preserveOnce("sessionid", "csrftoken");
    });
  
    it("should navigate to create vacation", () => {
        cy.visit('/app/calendar/employees/leave')
        cy.get(".create-btn")
            .click()
        cy.url().should("include", "/app/create/employees/leave")
    });

    it("should navigate within calendar", () => {
        cy.visit('/app/calendar/employees/leave')
        cy.get(".navigate-left")
            .click()
        cy.get(".navigate-right")
            .click()
        cy.get(".gantt-btn")
            .click()
        cy.get(".week-btn")
            .click()
        cy.get(".day-btn")
            .click()
        cy.url().should("include", "/app/calendar/employees/leave")
    });

  });
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


Cypress.Commands.add('login', () => {
    cy.visit("/login/");
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
})
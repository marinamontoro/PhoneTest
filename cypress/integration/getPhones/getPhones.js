import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm in phone catalog page", () => {
    cy.visit(Cypress.env("default"));
})

Then("I can see the phone list", () => {
    cy.get('h2:contains("Phone list")');
    cy.get('[class*=MuiCardActionArea]:contains("iPhone_8")');
})

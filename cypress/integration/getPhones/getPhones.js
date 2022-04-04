import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm in phone catalog page", () => {
    cy.visit(Cypress.env("default"));
})

Then("I can see the phone list", () => {
    cy.get('h2:contains("Phone list")');
    cy.get('[class*=MuiCardActionArea]:contains("iPhone_8")');
})

And("I can mark as favorite the {string} phone", (phoneName) => {
    cy.get(`[class*=MuiCard]:contains(${phoneName})>[class*=MuiCardActions]>[aria-label="add to favorites"]`).click({force:true});
})

And("I can see the {string} in the favorite list", (phoneName) => {
    cy.get(`.MuiPaper-root > :nth-child(3) > :nth-child(2)`).click({force:true});
    cy.get(`[class*=MuiCardActionArea]:contains(${phoneName})`);
})
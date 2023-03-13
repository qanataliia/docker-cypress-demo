import { faker, Faker } from "@faker-js/faker";
import { elementsGeneral } from "../../fixtures/generalFixtures/elementsGeneral";

describe("Sign Up", () => {
  it("Allows a user to sign up", () => {
    cy.visit("/app/ui/signup");
    cy.get(elementsGeneral.userTypeDropdown).click();
    cy.get(elementsGeneral.firstNameField).type(faker.options.firstName);
    cy.get(elementsGeneral.lastNameField).type(faker.options.lastName);
    cy.get(elementsGeneral.emailField).type(faker.internet.email);
    cy.get(elementsGeneral.passwordField).type(faker.internet.password);
    cy.get(elementsGeneral.submitButton).click();
    cy.findByText("For accountants").click();
  });
});

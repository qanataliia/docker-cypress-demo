import {
  elements,
  elementsBusiness,
} from "../../fixtures/businessFixtures/elementsBusiness";
import { elementsGeneral } from "../../fixtures/generalFixtures/elementsGeneral";
import { faker } from "@faker-js/faker";

describe("Email validation", () => {
  it("Displays an error message for an invalid email", () => {
    cy.visit("https://dev.capitalise.com/app/ui/signup/business");
    cy.get(elementsGeneral.emailField)
      .should("be.empty")
      .type(faker.random.alpha());
    cy.get(elementsGeneral.submitButton).should("be.enabled").click();
    cy.get(elementsBusiness.errorMessage).should("be.visible");
  });
});

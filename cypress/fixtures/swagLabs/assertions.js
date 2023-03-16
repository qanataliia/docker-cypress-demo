export const validateUserIsLoggedIn = () => {
  cy.get(selectors.hamburgerMenu).should("be.visible");
  cy.url().should("include", "/inventory.html");
};

export const validateErrorMessageIsDisplayed = () => {
  cy.get(selectors.errorMessage).should("be.visible");
};
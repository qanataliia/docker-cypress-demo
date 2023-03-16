import { selectors } from "./selectors";
export const visitWebsite = () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get(selectors.userName).should("be.visible");
  cy.get(selectors.password).should("be.visible");
  cy.get(selectors.loginButton).should("be.visible");
  cy.findByText("Swag Labs").should("be.visible");
};

export const fillOutLoginForm = (username, password) => {
  cy.get(selectors.userName).type(username);
  cy.get(selectors.password).type(password);
};

export const logout = () => {
  cy.get(selectors.hamburgerMenu)
    .click()
    .then(() => {
      cy.get(selectors.logoutButton).should("be.visible").click();
    });
};

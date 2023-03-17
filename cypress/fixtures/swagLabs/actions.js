import { selectors } from "./selectors";
export const visitWebsite = () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get(selectors.userName).should("be.visible");
  cy.get(selectors.password).should("be.visible");
  cy.get(selectors.loginButton).should("be.enabled");
};

export const fillOutLoginForm = (username, password) => {
  cy.get(selectors.userName).click().type(username);
  cy.get(selectors.password).click().type(password);
};

export const clickOnLoginButton = () => {
  cy.get(selectors.loginButton).should("be.visible").click();
};

export const logout = () => {
  cy.get(selectors.hamburgerMenu)
    .click()
    .then(() => {
      cy.get(selectors.logoutButton).should("be.visible").click();
    });
};

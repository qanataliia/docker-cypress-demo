import { swagLabs } from "../fixtures/swagLabs";
import { testUser } from "../fixtures/swagLabs/testData";

describe("Registration of a new user", () => {
  it("Sign up successfully", () => {
    swagLabs.visitWebsite();
    swagLabs.fillOutLoginForm(
      testUser.validUser.username,
      testUser.validUser.password
    );
    swagLabs.clickOnLoginButton();
    swagLabs.validateUserIsLoggedIn();
    swagLabs.logout();
  });
  it("Throw an error when trying to login with invalid credentials", () => {
    swagLabs.visitWebsite();
    swagLabs.fillOutLoginForm(
      testUser.invalidUser.username,
      testUser.invalidUser.password
    );
    swagLabs.clickOnLoginButton();
    swagLabs.validateErrorMessage();
  });
});

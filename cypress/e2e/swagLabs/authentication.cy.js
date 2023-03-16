import { swagLabs } from "../../fixtures/swagLabs";
import { testUser } from "../../fixtures/swagLabs/testData";

describe("Authentication Validation", () => {
  beforeEach(() => {
    swagLabs.visitWebsite();
    it("Logs in/Logs out successfully", () => {
      swagLabs.fillOutLoginForm(
        testUser.validUser.username,
        testUser.validUser.password
      );
      swagLabs.validateUserIsLoggedIn();
      swagLabs.logout();
    });
    it("Displays error message for invalid login", () => {
      swagLabs.fillOutLoginForm(
        testUser.invalidUser.username,
        testUser.invalidUser.password
      );
      swagLabs.validateErrorMessageIsDisplayed();
    });
  });
});

const TestData = require("../testdata/account.json");
const User = require("../testdata/login.json")
const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/home.page");
const AccountPage = require("../pageobjects/account.page");

describe("Login", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it("description", async () => {
    await LoginPage.login(User.username, User.password);
  });
});

describe("My change password application", () => {
  beforeEach(async () => {
    await AccountPage.open();
  });

  afterEach(async () => {
    await AccountPage.open();
  });

  function doTest({
    description,
    currentPass,
    newPass,
    confirmPass,
    expected,
  }) {
    it(description, async () => {
      await AccountPage.changePassword(currentPass, newPass, confirmPass);
      switch (expected) {
        case "CHANGE_SUCCESS":
          await expect(AccountPage.successfully).toBeExisting();
          break;
        case "CHANGE_FAIL":
          await expect(AccountPage.successfully).not.toBeExisting();
          break;
        default:
          break;
      }
    });
  }
  TestData.forEach((testData) => doTest(testData));
});

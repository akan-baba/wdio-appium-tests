import { UserRegistration } from "../page/userRegistration.page";
import { faker } from '@faker-js/faker';
const registerPage = new UserRegistration();
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();

describe("NopCommerce User Registration Flow", () => {
  beforeEach(async () => {
    await driver.terminateApp("com.nopcommerce.nopcommerce_mobile");
    await driver.activateApp("com.nopcommerce.nopcommerce_mobile");
  });
  it("User registration form", async () => {
    await $(registerPage.appSelectors.accountButton).click();
    await $(registerPage.appSelectors.registerButton).click();
    await $(registerPage.appSelectors.firstName).click()
    await $(registerPage.appSelectors.firstName).setValue(firstname);
    await $(registerPage.appSelectors.lastName).click()
    await $(registerPage.appSelectors.lastName).setValue(lastname);
    await $(registerPage.appSelectors.email).click()
    await $(registerPage.appSelectors.email).setValue(email);
    await $(registerPage.appSelectors.password).scrollIntoView();
    await driver.hideKeyboard();
    await $(registerPage.appSelectors.password).click()
    await $(registerPage.appSelectors.password).setValue('red123')
    await $(registerPage.appSelectors.confirmPwd).click()
    await $(registerPage.appSelectors.confirmPwd).setValue('red123')
    await driver.hideKeyboard();
    await $(registerPage.appSelectors.registerBtn).click()
    await $(registerPage.appSelectors.accountButton).click();
    await driver.pause(5000);
  });
});

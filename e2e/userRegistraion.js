import { UserRegistration } from "../page/userRegistration.page";
import { faker } from "@faker-js/faker";
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
    await $(registerPage.appSelectors.firstName).click();
    await $(registerPage.appSelectors.firstName).setValue(firstname);
    await $(registerPage.appSelectors.lastName).click();
    await $(registerPage.appSelectors.lastName).setValue(lastname);
    await $(registerPage.appSelectors.email).click();
    await $(registerPage.appSelectors.email).setValue(email);
    await $(registerPage.appSelectors.password).scrollIntoView();
    await driver.hideKeyboard();
    await $(registerPage.appSelectors.password).click();
    await $(registerPage.appSelectors.password).setValue("red123");
    await $(registerPage.appSelectors.confirmPwd).click();
    await $(registerPage.appSelectors.confirmPwd).setValue("red123");
    await driver.hideKeyboard();
    await $(registerPage.appSelectors.registerBtn).click();
    await $(registerPage.appSelectors.accountButton).click();
    await driver.pause(5000);
    const scrollContainer = await $('android=new UiSelector().scrollable(true)');
    await browser.swipe({ scrollableElement: scrollContainer });
    await $(registerPage.appSelectors.logOutButton).click()
    await $(registerPage.appSelectors.logOutButton).click()

  });

  it('User registration input field error messages',async () => {
    await $(registerPage.appSelectors.accountButton).click();
    await $(registerPage.appSelectors.registerButton).click();
    await $(registerPage.appSelectors.registerBtn).scrollIntoView(); 
    await $(registerPage.appSelectors.registerBtn).click()
    await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollBackward()');
    await driver.pause(5000);
    const errorElement1 = await $("~First name can't be empty");
    await expect(errorElement1).toBeDisplayed({ timeout: 5000 })
    const errorElement2 = await $("~Last name can't be empty");
    await expect(errorElement2).toBeDisplayed({ timeout: 5000 })
    const errorElement3 = await $("~Email can't be empty");
    await expect(errorElement3).toBeDisplayed({ timeout: 5000 })
    
    await $(registerPage.appSelectors.registerBtn).scrollIntoView();
    const errorElement4 = await $("~Password can't be empty");
    await expect(errorElement4).toBeDisplayed({ timeout: 5000 })
    const errorElement5 = await $("~Confirm password can't be empty");
    await expect(errorElement5).toBeDisplayed({ timeout: 5000 })
    
      
  });

  
    


 
});

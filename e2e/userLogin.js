import {UserLogin} from '../page/login.page'
const loginPage = new UserLogin();


describe('User Login', () => {
    beforeEach(async () => {
        await driver.terminateApp("com.nopcommerce.nopcommerce_mobile");
        await driver.activateApp("com.nopcommerce.nopcommerce_mobile");
      })
    it('Login Page', async () => {
        await $(loginPage.appSelectors.accountButton).click()
        await $(loginPage.appSelectors.loginButton).click()
        await $(loginPage.appSelectors.email).click()
        await $(loginPage.appSelectors.email).setValue('Joe@aol.com');
        await $(loginPage.appSelectors.password).click()
        await $(loginPage.appSelectors.password).setValue('red123')
        await $(loginPage.appSelectors.loginBtn).click()
        await driver.pause(2000)
        await $(loginPage.appSelectors.accountButton).click()
        await driver.pause(5000)
        const scrollContainer = await $('android=new UiSelector().scrollable(true)');
        await browser.swipe({ scrollableElement: scrollContainer });
        await $(loginPage.appSelectors.logOutButton).click()
        await $(loginPage.appSelectors.logOutButton).click()
        
    });

    it('should show error for incorrect login', async () => {
        await driver.pause(2000)
        await $(loginPage.appSelectors.accountButton).click()
        await $(loginPage.appSelectors.loginButton).click()
        await $(loginPage.appSelectors.email).click()
        await $(loginPage.appSelectors.email).setValue('Joe@ao');
        await $(loginPage.appSelectors.password).click()
        await $(loginPage.appSelectors.password).setValue('123')
        await $(loginPage.appSelectors.loginBtn).click()
        const okBtn = await $('~OK');
        await okBtn.click(); // optional: to close the popup
        const errorElement1 = await $('~Password must be at least 6 characters long');
        await expect(errorElement1).toBeDisplayed();
        await driver.pause(2000)
        const errorElement2 = await $('~Email is not valid');
        await expect(errorElement2).toBeDisplayed()

    
       
      });
      
    
});
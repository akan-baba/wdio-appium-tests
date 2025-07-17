
export class UserRegistration {

    appSelectors = {
      navMenu: '~Open navigation menu',
      signinLogin: '~Sign up or Login',
      creatAccountBtn:'~CREATE AN ACCOUNT',
      firstName: "(//android.widget.EditText)[1]",
      lastName: '(//android.widget.EditText)[2]',
      emailField: '(//android.widget.EditText)[3]',
      passwordField: '(//android.widget.EditText)[4]',
      confirmPasswordField: '(//android.widget.EditText)[5]',
      createCusAccount: '~CREATE CUSTOMER ACCOUNT'
    }
  
    async clickMenu() { await $(this.appSelectors.navMenu) }
    async clicksigninLogin() { await $(this.appSelectors.signinLogin) }
    async clickCreateacountBtn() {await $(this.appSelectors.creatAccountBtn)}
    async enterFirstName() { await $(this.appSelectors.firstName); }
    async enterLastName() { await $(this.appSelectors.lastName); }
    async enterEmail() { await $(this.appSelectors.emailField); }
    async enterCompany(company) { await $(this.appSelectors.companyField).setValue(company); }
    async enterPassword() { await $(this.appSelectors.passwordField); }
    async enterConfirmPassword() { await $(this.appSelectors.confirmPasswordField); }
    async clickCreatecustomrBtn() {await $(this.appSelectors.createCusAccount)}

  
  }
  
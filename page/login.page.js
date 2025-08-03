export class UserLogin {

    appSelectors = {
        accountButton: "//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.widget.Button[4]",
        loginButton:'~Log in',
        email:'//android.widget.EditText[1]',
        password:'//android.widget.EditText[2]',
        loginBtn:'//android.widget.Button[@content-desc="Log in"]',
        logOutButton:'//android.widget.Button[@content-desc="Log out"]'

    }

    async clickAccountBtn() {await $(this.appSelectors.accountButton)}
    async clickLoginBtn() {await $(this.appSelectors.loginButton) }
    async enterEmail() {await $(this.appSelectors.email)}
    async enterPwassord() {await $(this.appSelectors.password)}
    async clickLoginBtn() {await $(this.appSelectors.loginBtn)}
    async clickLogOutBtn() {await $(this.appSelectors.logOutButton)}

     

  
  }
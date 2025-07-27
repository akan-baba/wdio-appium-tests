
export class UserRegistration {

    appSelectors = {
      accountButton: "//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.widget.Button[4]",
      registerButton: '~Register',
      firstName: '//android.widget.EditText[1]',
      lastName:'(//android.widget.EditText)[2]',
      email:'(//android.widget.EditText)[3]',
      password:'//android.view.View[@content-desc="Password"]/android.widget.EditText[1]',
      confirmPwd:'//android.view.View[@content-desc="Password"]/android.widget.EditText[2]',
      registerBtn: '//android.widget.Button[@content-desc="Register"]'

    }

     
    async clickAcccountBtn() { await $(this.appSelectors.accountButton) }
    async clickRegisterBtn() {await $(this.appSelectors.registerButton)}
    async enterFirstName() {await $(this.appSelectors.firstName)}
    async enterLasttName() {await $(this.appSelectors.lastName)}
    async enterPassword() {await $(this.appSelectors.password)}
    async enterConfirmPwd() {await $(this.appSelectors.confirmPwd)}
    async clickRegBtn() {await $(this.appSelectors.registerBtn)}
    

  
  }
  
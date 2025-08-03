// utils/customCommands.js or similar
export function userlogin() {
    browser.addCommand('userlogin', async (email, password) => {
      await driver.terminateApp("com.nopcommerce.nopcommerce_mobile");
      await driver.activateApp("com.nopcommerce.nopcommerce_mobile");
  
      await $('//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.widget.Button[4]').click();
      await $('~Log in').click();
      await $('//android.widget.EditText[1]').click();
      await $('//android.widget.EditText[1]').setValue(email);
      await $('//android.widget.EditText[2]').click();
      await $('//android.widget.EditText[2]').setValue(password);
      await $('//android.widget.Button[@content-desc="Log in"]').click();
    });
  }
  

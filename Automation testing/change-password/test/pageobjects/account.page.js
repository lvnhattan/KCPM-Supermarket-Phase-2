

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputCurrentPassword() {
        return $('input[type="password"]#CurrentPassword');
    }

    get inputNewPassword() {
        return $('input[type="password"]#NewPassword');
    }

    get inputConfirmNewPassword() {
        return $('input[type="password"]#ConfirmNewPassword');
    }

    get btnSubmit() {
        return $('input[type="submit"]#ChangePasswordPushButton');
    }

    successfully() {
        return $('table#ChangePasswordMember');
    }

    async changePassword (currentPassword, newPassword, confirmNewPassword) {
        await this.inputCurrentPassword.setValue(currentPassword);
        await this.inputNewPassword.setValue(newPassword);
        await this.inputConfirmNewPassword.setValue(confirmNewPassword);
        // await this.btnSubmit.scrollIntoView();
        await this.btnSubmit.click();
    }

    async logout() {
      await browser.execute(() => {
             __doPostBack('ctl00$Header$LoginViewHeader$LoginStatus1$ctl00','');
      });
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('Member/Account.aspx');
    }
}

module.exports = new AccountPage();

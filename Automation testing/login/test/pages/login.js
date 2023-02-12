

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('input[type="text"]#UserName');
    }

    get inputPassword() {
        return $('input[type="password"]#Password');
    }

    get btnSubmit() {
        return $('input[type="submit"]#LoginButton');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.scrollIntoView();
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('/Login.aspx');
    }
}

export default new LoginPage();

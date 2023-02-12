

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get userDropdownMenu() {
    return $('span#Header_LoginViewHeader_LoginName1');
  }

  get logoutButton() {
    return $('a#Header_LoginViewHeader_LoginStatus1');
  }

  get textKeyWord() {
    return $('input[type="search"]#TextBoxKeyword');
  }

  get searchButton() {
    return $('a#LinkButtonSearch.btn.btn-default.search');
  }

  get pagination()
  {
    return $('span#btn.active');
  }

  async search(keyword) {
    await this.textKeyWord.setValue(keyword);
    await this.searchButton.click();
    // await browser.execute(() => {
    //   __doPostBack('ctl00$Header$LinkButtonSearch', '');
    // });

  }

  async logout() {
    await browser.execute(() => {
      __doPostBack('ctl00$Header$LoginViewHeader$LoginStatus1$ctl00', '');
    });
  }

  open() {
    super.open('');
  }
}

export default new HomePage();

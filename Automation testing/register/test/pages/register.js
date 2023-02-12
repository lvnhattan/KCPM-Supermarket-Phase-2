import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#UserName");
  }

  get inputPassword() {
    return $("#Password");
  }

  get inputPasswordConfirmation() {
    return $("#ConfirmPassword");
  }

  get btnSubmit() {
    return $("#StepNextButton");
  }

  get inputFullname() {
    return $("#FullName");
  }

  get inputEmail() {
    return $("#Email");
  }

  get selectboxQuestion() {
    return $("#Question");
  }

  get inputAnswer() {
    return $("#Answer");
  }

  get checkboxAgreement() {
    return $("#agreement");
  }

  getMessage() {
    return $("h4");
  }


  getErrorNotMatchPassword() {
    return $("#CompareValidatorPassword");
  }

  getErrorPasswordCondition() {
    return $(".text-danger");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async register(
    fullname,
    email,
    username,
    password,
    confirmPassword,
    questionNo,
    answer,
    agrrement
  ) {
    
    await this.inputFullname.setValue(fullname);
    await this.inputEmail.setValue(email);
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.inputPasswordConfirmation.setValue(confirmPassword);
    if (questionNo){
      await this.selectboxQuestion.selectByAttribute(
        "value",
        questionNo
      );
    }
    await this.inputAnswer.setValue(answer);
    if (agrrement){
      let element = await this.checkboxAgreement.parentElement();
      element.click();
    }
    // this.checkboxAgreement.click();
    const elem = await $('a[href$="http://w3layouts.com/"]');
    // scroll to specific element
    await elem.scrollIntoView();
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("Register.aspx");
  }
}

export default new RegisterPage();

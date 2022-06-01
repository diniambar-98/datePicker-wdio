/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import Page from './page';

class Login extends Page {
  // Login
  get atauText() { return $('.');
  }

  get blmpunyaakunText() {
    return $('.');
  }

  get invitationLoginText() {
    return $('.');
  }

  get loginText() {
    return $('.form-title');
  }

  get fieldEmail() {
    return $('#j_username');
  }

  get fieldPassword() {
    return $('#j_password');
  }

  get facebookButton() {
    return $('.btn-facebook');
  }

  get googleButton() {
    return $('.btn-google');
  }

  get buttonLanjutkan() {
    return $('.login-submit-btn');
  }

  get errorMessage() {
    return $('');
  }

  get buttonLupasPass() {
    return $('.btn-lupapassword');
  }

  get checklistBiarkanSayaMasuk() {
    return $('.checkboc-term-condition-signin');
  }

  get iconShowPass() {
    return $('.btn-see-password-signin');
  }

  get showPassword() {
    return $('.');
  }

  get register() {
    return $('.btn-signup-manual');
  }

  get errorPassword() {
    return $('.form-grp-login-password .field-error');
  }

  get errorEmail() {
    return $('.form-grp-login-username .field-error');
  }

  open() {
    super.open(`${browser.options.baseUrl}/login`);
  }

  openForgetPassSuccess() {
    super.open(`${browser.options.baseUrl}/login/pw/success`);
    
  }
  
  verifyLogin() {
    super.elementShouldDisplayed(this.loginText);
    super.elementShouldDisplayed(this.fieldEmail);
    super.elementShouldDisplayed(this.fieldPassword);
    super.elementShouldDisplayed(this.buttonLanjutkan);
    super.urlShouldEquals(`${browser.options.baseUrl}/login`);
  }

  verifyError() {
    super.elementIsDisplayed(this.errorMessage);
  }

  verifyFilledPassword() {
    super.elementIsDisplayed(this.showPassword);
  }

  inputAccount() {
    super.inputElement(this.fieldEmail, '080980125');
    super.inputElement(this.fieldPassword, 'apaaja');
    super.clickElement(this.buttonLanjutkan);
  }

  inputEmail(email) {
    super.inputElement(this.fieldEmail, email);
  }

  inputPhoneNumber(email) {
    super.inputElement(this.fieldEmail, email);
  }

  inputPassword(password) {
    super.inputElement(this.fieldPassword, password);
  }

  clickShowPass() {
    super.clickElement(this.iconShowPass);
  }

  clickLanjutkan() {
    super.clickElement(this.buttonLanjutkan);
  }

  clickFacebook() {
    super.clickElement(this.facebookButton);
  }

  clickGoogle() {
    super.clickElement(this.googleButton);
  }

  clickLupaPass() {
    super.clickElement(this.buttonLupasPass);
  }

  clickChecklist() {
    super.clickElement(this.checklistBiarkanSayaMasuk);
  }

  clickDaftarDisini() {
    super.clickElement(this.register);
  }

  verifyErrorEmail(err) {
    super.elementShouldHaveText(this.errorEmail, err)
  }

  verifyErrorPassword(err) {
    super.elementShouldHaveText(this.errorPassword, err)
  }

  verifyDisabledLanjutkan() {
    super.elementIsDisable(this.buttonLanjutkan);
  }
}

export default new Login();

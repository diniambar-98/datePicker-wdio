/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { When, Then, Given } from 'cucumber';
// eslint-disable-next-line no-unused-vars
import login from './login';
import loginOTP from '../pageobjects/loginOTP';
import loginregist from '../pageobjects/register';
import home from '../pageobjects/home';
import { log } from 'grunt';
import thankYou from '../pageobjects/thankYou';

Given(/^a web browser is on the Login Page$/, () => {
  login.open();
});

When(/^User fill Email '(.*)'$/, (email) => {
  login.inputEmail(email);
});

When(/^User fill Password '(.*)'$/, (password) => {
  login.inputPassword(password);
});

When(/^User fill Phone Number '(.*)'$/, (phonenumber) => {
  login.inputPhoneNumber(phonenumber);
});

When(/^User click Lanjutkan button at Login Page$/, () => {
  login.clickLanjutkan();
});

Then(/^User can see error message email '(.*)'$/, (error) => {
  login.verifyErrorEmail(error);
});

Then(/^User can see error message password '(.*)'$/, (error) => {
  login.verifyErrorPassword(error);
});

Then(/^User can see error message password '(.*)'$/, (error) => {
    login.verifyErrorPassword(error);
  });

Then(/^User can see Lanjutkan button disabled$/, () => {
  login.verifyDisabledLanjutkan();
});

Then(/^User will be directed to Register Page$/, () => {
  loginregist.verifyRegister();
});

When(/^User click Button Google at Login Page$/, () => {
  login.clickGoogle();
});

When(/^User click Lupa Password at Login Page$/, () => {
  login.clickLupaPass();
});

Then(/^User will be directed to OTP Page$/, () => {
  loginOTP.verifyOTPpage();
});

When(/^User click Daftar Disini$/, () => {
  login.clickDaftarDisini();
});

When(/^User click show Password icon on the Password field$/, () => {
  login.clickShowPass();
});

Then(/^User can see the filled Password at Login Page$/, () => {
  login.verifyFilledPassword();
});

When(/^User not input invalid OTP$/, () => {
  loginOTP.inputInvalidOTP();
});

When(/^User click Checklist Biarkan Saya Masuk$/, () => {
  login.clickChecklist();
});

When(/^User click Button Facebook at Login Page$/, () => {
    login.clickFacebook();
});

When(/^User Login successfully$/, () => {
    home.verifyMainMenu();
});

Given(/^a Mobile Web is on the Login Page$/, () => {
  login.open();
});

When(/^User fill '([^"]*)' as Email at Login pop up menu$/, () => {
  login.inputEmail();
});

When(/^User fill '([^"]*)' as Password at Login pop up menu$/, () => {
  login.inputPassword();
});

When(/^User click Lanjutkan at Login pop up menu$/, () => {
  login.clickLanjutkan();
});

Given(/^a web browser is on the Forget Password Succes Page$/, () => {
  login.openForgetPassSuccess();
});

Then(/^User can see the Forget Password sucess page same just like before$/, () =>{
  thankYou.compareFullScreen("reset-password");
});
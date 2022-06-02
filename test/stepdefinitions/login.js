import { When, Then, Given } from 'cucumber';

import login from '../pageobjects/login';

When(/^User fill Password '(.*)'$/, (password) => {
  login.inputPassword(password);
}); //check

When(/^User fill Phone Number '(.*)'$/, (phonenumber) => {
  login.inputPhoneNumber(phonenumber);
}); // check

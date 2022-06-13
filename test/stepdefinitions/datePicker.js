import { When, Then, Given } from 'cucumber';
import datePicker from '../pageobjects/datePicker.js';

Given(/^datePicker WebPage$/, () => {
  datePicker.openPage();
}); 

When(/^User set date value$/, () => {
  datePicker.setValue();
}); 

Then(/^User success add the value$/, () => {
  datePicker.dateVerify();
}); 





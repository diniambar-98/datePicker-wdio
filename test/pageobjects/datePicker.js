import Page from './page';

class datePicker extends Page {
  get datePickerBar() { return $('#date-picker');}
  get crossBtn() { return $('#_pages_plugin_content .mantine-Paper-root > div > .mantine-DatePicker-root .mantine-ActionIcon-transparent');};


 openPage() {
   super.open(`${browser.options.baseUrl}/components/datepicker`)
 }

  setValue() {
    browser.pause(3000);
    super.removeAttribute()
    browser.pause(1000);
    super.clickElement(this.crossBtn);
    browser.pause(1000);
    super.inputElement(this.datePickerBar, 'November 15, 1998')
    browser.pause(3000);
  }

  dateVerify() {
    super.elementShouldHaveValue(this.datePickerBar, 'November 15, 1998')
  }
}

export default new datePicker();

import reporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import mergeImg from 'merge-img';

const timeout = 15000;

const methodOptions = {
  returnAllCompareData: true,
};

export default class Page {
  open(path) {
    browser.url(path);
    browser.pause(1000);
    browser.refresh();
  }

  openSetLocation(path,param) {
    browser.url(path+'/location'+param);
  }

  waitElementDisplayed(element) {
    if (!element.isDisplayed()) {
      element.waitForDisplayed({timeout});
    }
  }

  waitELementNotDisplayed(element, localTimeout = timeout) {
    browser.waitUntil(
      () => element.isDisplayed() === false,
      {
        timeout: localTimeout,
        timeoutMsg: `${element.selector} took more than ${localTimeout} to dissappear`,
      }
    );
  }

  waitElementExist(element) {
    if (!element.isExisting()) {
      element.waitForExist({timeout});
    }
  }

  clickElement(element) {
    this.waitElementDisplayed(element);
      element.click();
  }

  clickElementViaInject(element) {
    this.waitElementDisplayed(element);
    browser.executeAsync(function (selector, done) {
      document.querySelector(selector).click();
      done();
    }, element.selector);
    browser.pause(500);
  }

  inputElement(element, value) {
    this.waitElementDisplayed(element);
    element.clearValue();
    element.setValue(value);
  }

  inputElementThenEnter(element, value) {
    this.waitElementDisplayed(element);
    element.clearValue();
    element.setValue(value);
    browser.keys("\uE007");
  }

  titleShouldEquals(value) {
    browser.getTitle().should.equal(value);
  }

  urlShouldEquals(value) {
    browser.getUrl().should.equals(value);
  }

  urlShouldContains(value) {
    browser.getUrl().should.contains(value);
  }

  isElementDisplayed(element) {
    this.waitElementDisplayed(element);
    return element.isDisplayed();
  }

  isElementNotDisplayed(element) {
    const isDisplayed = element.isDisplayed();
    return isDisplayed;
  }

  isElementExisting(element) {
    this.waitElementExist(element);
    return element.isExisting();
  }

  isElementClickable(element) {
    this.waitElementDisplayed(element);
    return element.isClickable();
  }

  elementShouldDisplayed(element) {
    this.isElementDisplayed(element).should.be.true;
  }

  elementShouldNotDisplayed(element) {
    this.isElementNotDisplayed(element).should.be.false;
  }

  elementScrollIntoView(element) {
    element.scrollIntoView({ block: "center", inline: "center" });
  }
  
  clickScrollElement(element) {
    this.elementScrollIntoView(element);
    this.clickElement(element);
  }

  elementScrollShouldDisplayed(element) {
    element.scrollIntoView();
    this.waitElementDisplayed(element)
    this.isElementDisplayed(element).should.be.true
  }

  elementShouldHaveText(element, text) {
    const res = this.getElementText(element);
    expect(res).to.equal(text);
  }

  elementShouldContainsText(element, text) {
    const res = this.getElementText(element);
    expect(res).contains(text);
  }

  elementShouldHaveValue(element, value) {
    const res = this.getElementValue(element);
    expect(res).to.equal(value);
  }

  elementScrollInputText(element, value) {
    element.scrollIntoView();
    this.waitElementDisplayed(element);
    element.clearValue();
    element.setValue(value);
  }
  
  elementShouldHaveAttributeValue(element, attributeName, value) {
    this.waitElementDisplayed(element);
    const res = this.getAttributeValue(element, attributeName);
    expect(res).contains(value);
  }

  elementShouldNotHaveAttributeValue(element, attributeName, value) {
    this.waitElementDisplayed(element);
    const res = this.getAttributeValue(element, attributeName);
    expect(res).not.contains(value);
  }

  elementShouldNotClickable(element) {
    this.isElementClickable(element).should.be.false;
  }

  alertShouldDisplayed(){
    browser.isAlertOpen();
    browser.acceptAlert();
  }

  alertShouldHaveText(text) {
    this.alertShouldDisplayed();
    const alertText = browser.getAlertText();
    expect(alertText).to.have.text(text);
  }

  elementDragAndDrop(element, target) {
    element.dragAndDrop(target);
  }

  enterBrowser(){
    browser.keys(['\ue007']);
  }

  tabBrowser(){
    browser.keys(['\ue004']);
  }

  switchWindowViaUrl(url){
    browser.waitUntil( 
      () => browser.switchWindow(url),
      {
        timeout: timeout,
        timeoutMsg: 'expected window to be show after 10s',
      }
    )
  }

  getElementValue(element) {
    return element.getValue();
  }

  getAttributeValue(element, attributeName) {
    return element.getAttribute(attributeName);
  }

  getElementText(element) {
    return element.getText();
  }

  deleteValue(element) {
    const long = (this.getElementValue(element)).length;
    let loop;
    for (loop = 0; loop < long; loop++) { 
      this.clickElement(element);
      browser.keys('Backspace');
    }
  }

  elementIsDisable(element) {
    expect(element.isEnabled()).to.equal(false);
  }


  waitElementEnabled(element) {
    expect(element.waitForEnabled({ timeout: 3000 }));
  }

  vtCheck(checkScreenMethod, name) {
    let res;
    try {
      browser.waitUntil(
        () => (() => {
          res = browser[checkScreenMethod](name, methodOptions);
          return res.misMatchPercentage;
        })() === 0,
        {
          timeout: timeout,
          timeoutMsg: `took more than ${timeout} to get the right screenshot`,
          interval: 7000,
        }
      );
    } catch (err) {
      console.error(err);
    };
    this.vtReport(res);
  }

  vtReport(res) {
    reporter.addAttachment('baseline path', res.folders.baseline, 'text/plain');
    if (res.misMatchPercentage !== 0) {
      browser.waitUntil(
        () => mergeImg([res.folders.baseline, res.folders.diff, res.folders.actual])
          .then((img) => img.getBuffer('image/png', (err, buffer) =>
            reporter.addAttachment('diff', buffer, 'image/png')
          )),
        {
          timeout: timeout,
          timeoutMsg: `took more than ${timeout} to attach diff screenshot`
        }
      );
    }
    expect(res.misMatchPercentage).below(0.9);
  }

  visualTesting(name) {
    this.vtCheck('checkScreen', name);
  }

  visualTestingElement(element, name) {
    const res = browser.checkElement(element, name, methodOptions);
    this.vtReport(res);
  }

  visualTestingFullpage(name) {
    this.vtCheck('checkFullPageScreen', name);
  }

  attachToAllureReport(title, json, mimetype) {
    reporter.addAttachment(title, json, mimetype)
  }

  chooseNextFromArray(original, list) {
    // choices starts from 1 to n
    const indexOriginal = list.indexOf(original);
    if ((indexOriginal + 1) < list.length) {
      return list[indexOriginal + 1];
    } else {
      return list[1];
    }
  }

  hideElement(sections){
        for (const section of sections) {
          browser.execute(function (sec) {
              document.querySelector(sec).style.display = "none";
          }, section);  
        } 

  }

  clickElementViaInject(element) {
    this.waitElementDisplayed(element);
    browser.executeAsync(function (selector, done) {
      document.querySelector(selector).click();
      done();
    }, element.selector);
    browser.pause(500);
  }

 removeAttribute() {
    browser.execute(() => {
      document.querySelectorAll('#date-picker').forEach(b=>b.removeAttribute('readonly'));
    }, )
  }
}

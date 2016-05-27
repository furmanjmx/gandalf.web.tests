"use strict";

require("./dashboard_page.js");

var home_page = function () {

    this.fillSignInForm = function (login, password) {
        browser.isElementPresent(by.model('model.username'));
        element(by.model('model.username')).sendKeys(login);
        element(by.model('model.password')).sendKeys(password);
    };

    this.submitForm = function () {
        element(by.buttonText('Submit')).click();
        return require("./dashboard_page.js");
    };
};

module.exports = new home_page();
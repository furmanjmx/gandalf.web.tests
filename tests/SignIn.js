"use strict";

var protractor = require("protractor");
var url = require('../caps').url;

describe('Gandalf', function () {

    beforeEach(function () {
        browser.driver.manage().window().setSize(1280, 1024);
        browser.get(url);
    });

    var home_page = require("../pages/home_page.js");

    it('SingIn test', function () {
        home_page.fillSignInForm('furman', 'gt40vt14d');
        var dashboard_page = home_page.submitForm();
        dashboard_page.assertDashboard();
    });

    it('SingIn test bad login and pass', function () {
        home_page.fillSignInForm('trololo', 'ololol');
        home_page.assertAlertMessage();
    });

    it('SingIn test bad password', function () {
        home_page.fillSignInForm('furman', 'ololol');
        home_page.assertAlertMessage();
    });

    it('SingIn test bad login', function () {
        home_page.fillSignInForm('sdfsdfsd', 'gt40vt14d');
        home_page.assertAlertMessage();
    });

    it('SingIn test bad login', function () {
        home_page.fillSignInForm('!@^%&*!$#%^(!()&_$#@)', '!@^%&*!$#%^(!()&_$#@)');
        home_page.assertAlertMessage();
    });
});
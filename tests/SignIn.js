"use strict";

var protractor = require("protractor");
var PageUrl = require('../caps');

describe('Gandalf', function () {

    beforeEach(function () {
        browser.get(PageUrl.url);
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
});
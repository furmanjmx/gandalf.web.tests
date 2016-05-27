"use strict";

var protractor = require("protractor");

describe('Gandalf', function () {

    beforeEach(function(){
        browser.get("http://gandalf.nebo15.com/service/#/sign-in");
    });

    var home_page = require("../pages/home_page.js");

    it('SingIn test', function () {

        home_page.fillSignInForm('furman','gt40vt14d');
        var dashboard_page = home_page.submitForm();
        dashboard_page.assertDashboard();
    });
});
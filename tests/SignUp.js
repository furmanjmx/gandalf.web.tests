"use strict";

var protractor = require("protractor");
var faker = require('faker');

describe('Gandalf', function () {

    beforeEach(function(){
        browser.get("http://gandalf.nebo15.com/service/#/sign-in");
    });

    var home_page = require("../pages/home_page.js");

    it('SingUp test', function () {
        var name = faker.name.findName();
        var password = faker.name.findName();
        var mail = faker.internet.email();

        home_page.fillSignUpForm(name, password, mail);
        var welcome_page = home_page.welcomePage();
        var new_project_page = welcome_page.clickContinue();
        new_project_page.createNewProject();
    });
});
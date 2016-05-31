"use strict";

var protractor = require("protractor");
var faker = require('faker');
var PageUrl = require('../caps');

describe('Gandalf', function () {

    beforeEach(function () {
        browser.get(PageUrl.url);
    });

    var home_page = require("../pages/home_page.js");

    it('AddConsumer test', function () {
        home_page.fillSignUpForm(faker.name.findName(), faker.name.findName(), faker.internet.email());
        var welcome_page = home_page.welcomePage();
        var new_project_page = welcome_page.clickContinue();
        new_project_page.createNewProject();
        new_project_page.createProject('testProject', 'testDescription');
        var settings_page = new_project_page.getSettings();
        settings_page.addConsumer('newConsumer');
    });
});
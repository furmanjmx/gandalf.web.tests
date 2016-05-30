"use strict";

var protractor = require("protractor");
var faker = require('faker');

describe('Gandalf', function () {

    beforeEach(function(){
        browser.get("http://gandalf.nebo15.com/service/#/sign-in");
    });

    var home_page = require("../pages/home_page.js");

    it('AddNewTable test', function () {
        var name = faker.name.findName();
        var password = faker.name.findName();
        var mail = faker.internet.email();

        home_page.fillSignUpForm(name, password, mail);
        var welcome_page = home_page.welcomePage();
        var new_project_page = welcome_page.clickContinue();
        new_project_page.createNewProject();
        var table_page = new_project_page.createProject('testProject', 'testDescription');
        var new_tables_page = table_page.addTable();
        new_tables_page.createNewTable('testName', 'testDescription', 'randData', 'description', 'testDescription', 'random', 'randomData', 'olol', 'dfdfs');
        new_tables_page.assertNewTable('testDescription');
    });

    it('DeleteTable test', function () {
        var name = faker.name.findName();
        var password = faker.name.findName();
        var mail = faker.internet.email();

        home_page.fillSignUpForm(name, password, mail);
        var welcome_page = home_page.welcomePage();
        var new_project_page = welcome_page.clickContinue();
        new_project_page.createNewProject();
        var table_page = new_project_page.createProject('Project', 'Description');
        var new_tables_page = table_page.addTable();
        new_tables_page.createNewTable('Name', 'Description', 'Data', 'description', 'testDescription', 'random', 'randomData', 'olol', 'dfdfs');
        new_tables_page.deleteTable('DELETE');
    });
});
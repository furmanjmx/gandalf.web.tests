"use strict";

var protractor = require("protractor");
var faker = require('faker');

describe('Gandalf', function () {

    beforeEach(function () {
        browser.get("http://gandalf.nebo15.com/service/#/sign-in");
    });

    var home_page = require("../pages/home_page.js");

    it('AddTable test', function () {
        home_page.fillSignUpForm(faker.name.findName(), faker.name.findName(), faker.internet.email());
        var welcome_page = home_page.welcomePage();
        var new_project_page = welcome_page.clickContinue();
        new_project_page.createNewProject();
        var table_page = new_project_page.createProject('testProject', 'testDescription');
        var new_tables_page = table_page.addTable();
        new_tables_page.createNewTable('testName', 'testDescription', 'randData', 'description', 'testDescription', 'random', 'randomData', 'olol', 'dfdfs');
        new_tables_page.assertNewTable('testDescription');
    });

    it('DeleteTable test', function () {
        home_page.fillSignUpForm(faker.name.findName(), faker.name.findName(), faker.internet.email());
        var welcome_page = home_page.welcomePage();
        var new_project_page = welcome_page.clickContinue();
        new_project_page.createNewProject();
        var table_page = new_project_page.createProject('Project', 'Description');
        var new_tables_page = table_page.addTable();
        new_tables_page.createNewTable('Name', 'Description', 'Data', 'description', 'testDescription', 'random', 'randomData', 'olol', 'dfdfs');
        new_tables_page.deleteTable('DELETE');
    });

    it('EditTable test', function () {
        home_page.fillSignUpForm(faker.name.findName(), faker.name.findName(), faker.internet.email());
        var welcome_page = home_page.welcomePage();
        var new_project_page = welcome_page.clickContinue();
        new_project_page.createNewProject();
        var table_page = new_project_page.createProject('Project2', 'Description2');
        var new_tables_page = table_page.addTable();
        new_tables_page.createNewTable('Name', 'Description', 'Data', 'description', 'testDescription', 'random', 'randomData', 'olol', 'dfdfs');
        new_tables_page.editTable('edit', 'page', 'randomedit');
    });

    it('DeleteRows test', function () {
        home_page.fillSignUpForm(faker.name.findName(), faker.name.findName(), faker.internet.email());
        var welcome_page = home_page.welcomePage();
        var new_project_page = welcome_page.clickContinue();
        new_project_page.createNewProject();
        var table_page = new_project_page.createProject('Project2', 'Description2');
        var new_tables_page = table_page.addTable();
        var i = 0;
        while (i < 2) {
            new_tables_page.createNewTable('Name', 'Description', 'Data', 'description', 'testDescription', 'random', 'randomData', 'olol', 'dfdfs');
            i++;
        }
        new_tables_page.deleteRow('random');
    });
});
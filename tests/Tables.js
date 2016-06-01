"use strict";

var protractor = require("protractor");
var faker = require('faker');
var url = require('../caps').url;

describe('Gandalf', function () {

    beforeEach(function () {
        browser.driver.manage().window().setSize(1280, 1024);
        browser.get(url);
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
        var table_page = new_project_page.createProject('Project3', 'Description3');
        var new_tables_page = table_page.addTable();
        for (var i = 0; i < 2; i++) {
            new_tables_page.createNewTable('Name', 'Description', 'Data', 'description', 'testDescription', 'random', 'randomData', 'olol', 'dfdfs');
        }
        new_tables_page.deleteRow('random');
    });
});
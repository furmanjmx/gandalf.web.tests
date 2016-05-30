"use strict";

require("./table_page.js");

var new_project_page = function () {

    this.createNewProject = function () {
        browser.isElementPresent(by.className('form-block'));
    };

    this.createProject = function (title, describe) {
        element(by.model('model.title')).sendKeys(title);
        element(by.model('model.description')).sendKeys(describe);
        element(by.className('btn btn-primary')).click();
        return require("./table_page.js");
    };
};

module.exports = new new_project_page();
"use strict";

var new_project_page = function () {

    this.createNewProject = function () {
        browser.isElementPresent(by.className('form-block'));
    };
};

module.exports = new new_project_page();
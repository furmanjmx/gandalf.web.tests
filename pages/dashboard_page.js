"use strict";

var dashboard_page = function () {

    this.assertDashboard = function () {
        browser.isElementPresent(by.className('btn btn-primary btn-icon'));
    };
};

module.exports = new dashboard_page();
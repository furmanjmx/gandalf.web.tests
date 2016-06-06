"use strict";

var debugger_page = function () {

    this.debugTable = function (description, type) {
        browser.isElementPresent(by.xpath('/html/body/div/ui-view/ui-view/div/ui-view/ui-view/div/div/ul/li[4]/a'));
        element(by.xpath('/html/body/div/ui-view/ui-view/div/ui-view/ui-view/div/div/ul/li[4]/a')).click();
        browser.isElementPresent(by.className('btn btn-primary btn-loading'));
        element(by.className('btn btn-primary btn-loading')).click();
        var tableTitle = element(by.xpath('/html/body/div/ui-view/ui-view/div/ui-view/ui-view/ui-view/div[1]/div[2]/div[2]/div/div[2]/pre/code/span[7]')).getText();
        expect(tableTitle).toBe(description);
        var matchingType = element(by.xpath('/html/body/div/ui-view/ui-view/div/ui-view/ui-view/ui-view/div[1]/div[2]/div[2]/div/div[2]/pre/code/span[11]')).getText();
        expect(matchingType).toBe(type);
    };
};

module.exports = new debugger_page();
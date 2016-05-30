"use strict";

require("../pages/table_page.js");

var new_tables_page = function () {

    this.createNewTable = function (tableName, tableDesc, testData, testData2, testData3, rowData, rowData2, Fieldtitle, FieldKey) {
        browser.isElementPresent(by.model('table.title'));
        element(by.model('table.title')).sendKeys(tableName);
        element(by.model('table.description')).sendKeys(tableDesc);
        element(by.model('$parent.model')).sendKeys(testData);
        element(by.model('table.defaultTitle')).sendKeys(testData2);
        element(by.model('table.defaultDescription')).sendKeys(testData3);
        element(by.className('plus')).click();
        element(by.model('rule.title')).sendKeys(rowData);
        element(by.model('table.defaultDescription')).sendKeys(rowData2);
        element(by.className('table-decision-column-add ng-isolate-scope')).click();
        browser.isElementPresent(by.model('field.title'));
        element(by.model('field.title')).sendKeys(Fieldtitle);
        element(by.model('field.key')).sendKeys(FieldKey);
        element(by.className('btn btn-primary')).click();
        element(by.className('btn btn-success btn-loading')).click();
        return require("./table_page.js");
    };

    this.assertNewTable = function (Name) {
        element(by.className('logo')).click();
        browser.isElementPresent(by.className('list-group-item-text ng-binding'));
        var tableName = element(by.className('list-group-item-text ng-binding')).getText();
        expect(tableName).toBe(Name);
    };

    this.deleteTable = function (data) {
        element(by.className('btn btn-danger')).click();
        element(by.model('model.code')).sendKeys(data);
        element(by.className('btn btn-danger')).click();
        browser.isElementPresent(by.className('list-group'));
        return require("./table_page.js");
    };
};

module.exports = new new_tables_page();




"use strict";

require("../pages/table_page.js");

var new_tables_page = function () {

    this.createNewTable = function (tableName, tableDesc, testData, testData2, testData3, rowData, rowData2, fieldtitle, fieldKey) {
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
        element(by.model('field.title')).sendKeys(fieldtitle);
        element(by.model('field.key')).sendKeys(fieldKey);
        element(by.className('btn btn-primary')).click();
        element(by.className('btn btn-success btn-loading')).click();
        return require("./table_page.js");
    };

    this.assertNewTable = function (name) {
        element(by.className('logo-img')).click();
        browser.isElementPresent(by.className('list-group-item-text ng-binding'));
        var tableName = element(by.className('list-group-item-text ng-binding')).getText();
        expect(tableName).toBe(name);
    };

    this.deleteTable = function (data) {
        element(by.className('btn btn-danger')).click();
        element(by.model('model.code')).sendKeys(data);
        element(by.className('btn btn-danger')).click();
        browser.isElementPresent(by.className('list-group'));
        return require("./table_page.js");
    };

    this.editTable = function (title, description, text) {
        element(by.css('[ng-if="rule.title"]')).click();
        element(by.model('rule.title')).sendKeys(title);
        element(by.model('rule.description')).sendKeys(description);
        element(by.className('glyphicon glyphicon-ok')).click();
        browser.isElementPresent(by.linkText('This table have unsaved data. You need to save changes manually.'));
        element(by.className('btn btn-success btn-loading')).click();
        var editTable = element(by.css('[ng-if="rule.title"]')).getText();
        expect(editTable).toBe(text);
    };

    this.deleteRow = function (text) {
        element(by.className('glyphicon glyphicon-remove')).click();
        browser.isElementPresent(by.linkText('This table have unsaved data. You need to save changes manually.'));
        element(by.className('btn btn-success btn-loading')).click();
        var editTable = element(by.xpath('/html/body/div/ui-view/ui-view/div/ui-view/ui-view/ui-view/form/div[2]/decision-table/div[1]/div[1]/table[1]/tbody/tr[1]/td[2]/div/b')).getText();
        expect(editTable).toBe(text);
    };
};

module.exports = new new_tables_page();




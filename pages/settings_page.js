"use strict";

var settings_page = function () {

    this.addConsumer = function (description) {
        browser.isElementPresent(by.className('text-primary'));
        element(by.linkText('+ create consumer')).click();
        element(by.model('model.description')).sendKeys(description);
        element(by.model('checked')).click();
        element(by.className('btn btn-primary')).click();
        element(by.className('btn btn-warning')).click();
        var consumer = element(by.xpath('/html/body/div/ui-view/ui-view/div/ui-view/ui-view/div[2]/div[2]/div[2]/div/div[2]/div/a[1]')).getText();
        expect(consumer).toBe(description);
    };

    this.deleteProject = function (text) {
        browser.isElementPresent(by.buttonText('Delete project'));
        element(by.buttonText('Delete project')).click();
        element(by.model('model.code')).sendKeys(text);
        element(by.buttonText('Delete')).click();
    };

    this.assertNewProjectPage = function () {
        browser.sleep(500);
        browser.ignoreSynchronization = true;
        browser.isElementPresent(by.buttonText('Submit'));
    };
};

module.exports = new settings_page();




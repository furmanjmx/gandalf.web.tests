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
};

module.exports = new settings_page();
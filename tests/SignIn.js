var protractor = require("protractor");

describe('Gandalf', function () {

    beforeEach(function(){
        browser.get("http://gandalf.nebo15.com/service/#/sign-in");
    });

    it('SingIn test', function () {

        var submit = element(by.buttonText('Submit'));

        browser.isElementPresent(by.model('model.username'));
        element(by.model('model.username')).sendKeys('furman');
        element(by.model('model.password')).sendKeys('gt40vt14d');
        submit.click();

        browser.isElementPresent(by.className('btn btn-primary btn-icon'));
    });
});
// An example configuration file.
exports.config = {

    specs: ['tests/*.js'],

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine2',

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    plugins: [{
        package: 'protractor-console',
        logLevels: ['severe']
    }]
};

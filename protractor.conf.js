require('ts-node').register();

module.exports.config = {
    baseUrl: 'http://the-internet.herokuapp.com',


    onPrepare: async function() {
        // The internet website is not angular:
        await browser.waitForAngularEnabled(false)

    },
    useBlockingProxy: true,
    highlightDelay: 1000
}
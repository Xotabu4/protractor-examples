module.exports.config = {
    useAllAngular2AppRoots: true,
    directConnect: true,
    baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
    onPrepare: function () {
        //Making ExpectedConditions accessible everywhere thru shortcut
        global.EC = protractor.ExpectedConditions;

        beforeEach(function () {
            //empty
        })
    }
}
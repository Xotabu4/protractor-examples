module.exports.config = {
    useAllAngular2AppRoots: true,
    specs: ['specs/*_spec.js'],
    directConnect: true,
    baseUrl: 'http://www.hiteshbalar.com/preserver/notes',

    capabilities: {
        browserName: 'firefox',
        shardTestFiles: true,
        maxInstances: 3 
    },
    onPrepare: function () {
        let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
        let notesPage = new NotesPage();
        global.EC = protractor.ExpectedConditions;

        browser.manage().timeouts().implicitlyWait(2000);
        //jasmine.getEnv().addReporter({})
        beforeEach(function () {
            browser.get('')
            browser.sleep(200)
            browser.wait(EC.visibilityOf(notesPage.navbar.navBarElem), 10000, 'Header should be visible after page open')
        })

        //This function will be executed after each IT block in this DESCRIBE block
    afterEach(function () {
      // Wiping cookie files ONLY for current domain
      browser.manage().deleteAllCookies()
      // Wiping local and session storage
      browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
          })
      //Wiping indexedDB     
      browser.executeScript(`
      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
      `).then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
        })
    })
    }
}
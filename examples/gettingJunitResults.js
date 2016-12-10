/////////////////////////////////////////////////////////////////////////////
// How to get junit XML as an output from your tests
// You should use 3rd party lib: https://github.com/larrymyers/jasmine-reporters


///////////////////////////////////////////////////
// SINGLE THREAD (non parallel)

// in your config file:
let config = {
onPrepare: function () {
    let jasmineReporters = require('jasmine-reporters')
    let junitReporter = new jasmineReporters.JUnitXmlReporter({
        savePath: 'output/'
    })
    jasmine.getEnv().addReporter(junitReporter)
}
}

///////////////////////////////////////////////////
// MULTITHREAD (tests are parallel)

// in your config file:
let config2 = {
    onPrepare: function () {
        let jasmineReporters = require('jasmine-reporters')
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: false, // Do not report to one file
            useDotNotation: false, // Changes names of testcases
            savePath: '/folder_where_to_save',
            filePrefix: 'testcase_' // if you want to
        }));
    },

    afterLaunch: function (errorCode) {
        return combineReportFiles('/folder_where_to_save', 'testresults.xml', errorCode)
    }
}
// Since shardTestFiles = true; executes onPrepare() each time - our report files are overwritten each execution.
// Logic is to report results from test files each to his own file, and then combine into one XML file,
// that is suitable for Jenkins
function combineReportFiles (SPECS_REPORTS_PATH, JUNIT_TEST_REPORT, exitCode) {
    // install junit-report-merger
    let xmlMerger = require('junit-report-merger')
    let fs = require('fs')
    let defferMerge = Promise.defer()

    // Looking for our test results file
    let filesList = fs.readdirSync(SPECS_REPORTS_PATH)
    // Finding all files and converting to needed format
    let filesWithPaths = filesList.map(function (filename) {
        return `${SPECS_REPORTS_PATH}/${filename}`;
    })

    console.log('Combining all XML files with specs reports into one...', filesWithPaths)
    // It took me 2 days to understand that 3rd parameter is options, not callback
    xmlMerger.mergeFiles(JUNIT_TEST_REPORT, filesWithPaths, undefined, function (err, result) {
        if (err) {
            console.error(err, '\n Problems while combining test results to single file.')
        } else {
            console.log(`JUNIT test report created: ${JUNIT_TEST_REPORT} `)
        }
        defferMerge.resolve(exitCode)
    })
    // Returning promise is needed so protractor will wait for it before killing process
    return defferMerge.promise
};

///////////////////////////////////////////////////

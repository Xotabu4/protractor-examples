/////////////////////////////////////////////////////////////////////////////
// Upload file with protractor

// Notice! using protractor dependency - webdriverjs
var FileDetector = require('selenium-webdriver/remote/index.js').FileDetector;
browser.setFileDetector(new FileDetector());

// Upload usualy working thru setting absolute filepath into hidden input,
// that is located somewhere in the DOM
this.hiddenInputField.sendKeys('C:/ ').then(function () {
    console.log('Uploading file:', filePath);
});

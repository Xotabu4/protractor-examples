/////////////////////////////////////////////////////////////////////////////
// Alerts - is a native browser popups
// To work with it, read docs - http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_AlertPromise.html

// dismiss()
browser.switchTo().alert().dismiss()

// accepting
browser.switchTo().alert().accept()


//authenticateAs - you can use for login to some sites
browser.switchTo().alert().authenticateAs('admin', 'root')

//But sometimes you need to wait for alert to appear:
let EC = protractor.ExpectedConditions;
browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(")
browser.switchTo().alert().accept()
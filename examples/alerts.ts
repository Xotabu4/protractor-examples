import { browser, $, By, by, ExpectedConditions as EC } from 'protractor'

/////////////////////////////////////////////////////////////////////////////
// Alerts - is a native browser popups
// To work with it, read docs - http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_AlertPromise.html

describe('Alert', async function () {
    beforeEach(async function () {
        await browser.get('/javascript_alerts')
    })

    it('can be dismissed', async function () {
        await $('[onclick="jsConfirm()"]').click()
        await browser.switchTo().alert().dismiss()
    })

    it('can be accepted', async function () {
        await $('[onclick="jsConfirm()"]').click()
        await browser.switchTo().alert().accept()
    })

    it('wait for allert', async function () {
        await $('[onclick="jsConfirm()"]').click()
        await browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(")
        await browser.switchTo().alert().accept()
    })

    xit('can be authenticated', async function () {
        await browser.get('/basic_auth')

        await browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(")
        //authenticateAs - you can use for login to some sites
        await browser.switchTo().alert().authenticateAs('admin', 'admin')
    })

})


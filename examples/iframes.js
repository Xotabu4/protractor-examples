///////////////////////////////////////////////////////////////////////
/*
Iframes - is a HTML page included to another HTML page
This makes huge pain for automation testers to work with them
Biggest pain is to work with iframes in PageObjects/PageFragments
Imagine that we have a pageObject, that has a fragment, and that fragment is inside iframe.
So we have different contexts

Source code for iframes switch: https://github.com/SeleniumHQ/selenium/blob/master/javascript/node/selenium-webdriver/lib/webdriver.js#L1715


Here is just example of my vision how to work with iframes
*/

class HomePage {
    constuctor() {
        this.aboutUs = new AboutUsFragment() //this fragment is inside iframe
    }

    login(username, password) {
        $('login').sendKeys(username)
        $('password').sendKeys(password)
        $('btn.login').click()
    }
}

class AboutUsFragment {
    // When we will have decorators - then it will be much easier
    _executeInIframe(action) {
        /**
         * Logic is to switch into frame, do actions, get result, and then switch back to defaultContext and return result
         * So we are always know in which context we are working.
         */
        browser.switchTo().frame($('iframe.aboutUs'));
        let res = action()
        browser.switchTo().defaultFrame()
        return res
    }

    sendFeedback() {
        _executeInIframe(()=>{
            $('name').sendKeys('hello')
            $('description').sendKeys('I like your site!')
            $('button').click()
            browser.wait(EC.visibilityOf($('success'), 2000))
        })
    }

    getContactInfo() {
        return _executeInIframe(()=>{
            return $('contactus').getText()
        })
    }

}

//Then in our test code we don't care about any contexts - functions will be executed correctly
let homePage = new HomePage()
homePage.aboutUs.sendFeedback()
expect(homePage.aboutUs.getContactInfo()).toBe('Sasha')
homePage.login('test', 'test')
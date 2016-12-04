/////////////////////////////////////////////////////////////////////////////
// Assert that element has a correct text

expect($('myElement').getText()).toBe('My Text', 'Element should have "My Text" in it')

// OR

expect($('myElement').getText()).toContain('MyText', 'Element should contain "My Text" in it')


/////////////////////////////////////////////////////////////////////////////
// Wait for something

browser.wait(protractor.ExpectedConditions.visibilityOf($('myElement')), 3000, 'MyElement should appear')

// Waiting for 2 conditions
let EC = protractor.ExpectedConditions

browser.wait(EC.and(
                EC.visibilityOf($('myElement')), 
                EC.visibilityOf($('anotherElement'))
             ), 3000, 'MyElement and anotherElement should appear')


// Own condition to wait
let myCondition = ()=> {
    // Remember simple rule - your condition is a function that must return boolean, or promise that will be resolved to boolean
    return $('myElement').getText().then(text=> text == 'Hello World')
}

browser.wait(myCondition, 5000, 'Expected that element will have text "Hello World" ')


/////////////////////////////////////////////////////////////////////////////
// Assert element attribute
let href = $('myElement').getAttribute('href')
expect(href).toContain('https://www.google.com/user')

// Assert element has class

/**
 * .getAttribute('class') returns string, not array, 
 * and to avoid false positive when we have classes string like this -
 * 'inactive button someotherclass'
 * and trying to assert 
 * expect(classes).toContain('active') 
 * we will have true, since we are checking by substring.
 * 
 * So here we are splitting to array of values, and verifying that array contains exact value
 */
let classes = $('myElement').getAttribute('class').then(classes=>classes.split(' '))
expect(classes).toContain('active')


/////////////////////////////////////////////////////////////////////////////
// Find 

//Finding element by text
element(by.cssContainingText('myElement', 'Hello World!')).click()


//Assert element not exist
expect($('myElement').isPresent()).toBeFalsy('my Element should not exist')


//Searching for element inside element
let innerElement = $('myElement').$('notMyElement')
innerElement.click() //click goes to notMyElement

//Getting third element
$$('myElement').get(2).click()

//Also look at .map() and .filter() examples
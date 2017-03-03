/////////////////////////////////////////////////////////////////////////////
// MAP AND FILTER  simple examples
let someCollection = [0, 2, 3]
let newColletion = someCollection.map((elem, index)=> {
    console.log(`INDEX: ${index}, value: ${elem}`)
    return elem + 2
})
console.log(newColletion)

let someCollection2 = [`test`, `admin` , `user`]
let filtered = someCollection.filter(elem=> elem === `admin`)
console.log(filtered)

/////////////////////////////////////////////////////////////////////////////
// PROTRACTOR MAP AND FILTER

// How to get texts from elements in lowercase in new collection
let lowerCaseTexts = $$(`someELEMENT`).map((elm, index)=> {
    return elm.getText().then((text)=> text.toLowerCase())
})

// How to get only elements with `admin` text into new collection
let filtererd = $$(`someELEMENT`).filter((elm, index)=> {
    return elm.getText().then(text=> text == `admin`)
})
// If you need to be sure that there is only 1 element with text `admin` just assert that
expect(filtered.count()).toBe(1, `Should be only 1 element with text admin`)

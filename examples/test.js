
let someCollection = [0, 2, 3]
//NATIVE MAP AND FILTER
let newColletion = someCollection.map((elem, index)=>{
    console.log(`INDEX: ${index}, value: ${elem}`)
    return elem + 2
})
console.log(newColletion)


let someCollection2 = ['test', 'admin' , 'user']
let filtered = someCollection.filter(elem=> elem === 'admin')
console.log(filtered)


// PROTRACTOR MAP AND FILTER
let lowerCaseTexts = $$('someELEMENT').map((elm, index)=> {
    return elm.getText().then((text)=> text.toLowerCase())
})

lowerCaseTexts.then((arrray)=> console.log(array[0]))

let filtererd = $$('someELEMENT').filter((elm, index)=> {
    return elm.getText().then((text)=> {
        return text == 'admin'
    })
})
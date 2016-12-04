/////////////////////////////////////////////////////////////////////////////
// JASMINEJS: HOW beforeEach AND afterEach WORKS
// In this file i am showing in which order different jasmine functions executes
// To see output for this file: run in your commandline with globally installed protractor:
// protractor --specs examples/jasmine.js 
// Or you can see example output at the end of file

// just class to see results in with correct counter. plz ignore
class Counter {
    constructor() {
        this.innerC = 0
    }
    get c() {
        this.innerC = this.innerC + 1
        return this.innerC
    } 
}
let counter = new Counter()


console.log(`${counter.c} - file parsing`)
describe(`parent DESCRIBE block`, ()=> {
    console.log(`${counter.c} - file parsing - reading content of describe block`)

    beforeAll(()=>{
        console.log(`${counter.c} - beforeAll execution`)
    })

    beforeAll(()=>{
        console.log(`${counter.c} - beforeAll execution - executed in declaration order`)
    })

    beforeEach(()=>{
        console.log(`${counter.c} - beforeEach execution`)
    })

    beforeEach(()=>{
        console.log(`${counter.c} - beforeEach execution - executed in declaration order`)
    })

    afterAll(()=>{
        console.log(`${counter.c} - afterALL execution`)
    })

    afterEach(()=>{
        console.log(`${counter.c} - afterEACH execution`)
    })

    describe(`Nested describe block`, ()=>{
        console.log(`${counter.c} - file parsing - reading nested describe blocks as well`)

        beforeEach(()=>{
            console.log(`${counter.c} - Nested beforeEach executed!`)
        })
        
        it(`NESTED TEST!`, ()=> {
            console.log(`${counter.c} - NESTED TEST - executed`)
        })
    })
    
    //DATAPROVIDER
    let dataCollection = [1, 2, 3, 4, 5]
    dataCollection.map(data=>{
        it(`${counter.c} TEST for ${data}`, ()=>{
            console.log(`TEST number ${data} executed!`)
        })
    })

})
console.log(`${counter.c} - file parsing finished`)

/*
Output will be something like this
notice that dot . - is the point where jasmine track test as passed

1 - file parsing
2 - file parsing - reading content of describe block
3 - file parsing - reading nested describe blocks as well
9 - file parsing finished
Started
10 - beforeAll execution
11 - beforeAll execution - executed in declaration order
12 - beforeEach execution
13 - beforeEach execution - executed in declaration order
14 - Nested beforeEach executed!
15 - NESTED TEST - executed
16 - afterEACH execution
.17 - beforeEach execution
18 - beforeEach execution - executed in declaration order
TEST number 1 executed!
19 - afterEACH execution
.20 - beforeEach execution
21 - beforeEach execution - executed in declaration order
TEST number 2 executed!
22 - afterEACH execution
.23 - beforeEach execution
24 - beforeEach execution - executed in declaration order
TEST number 3 executed!
25 - afterEACH execution
.26 - beforeEach execution
27 - beforeEach execution - executed in declaration order
TEST number 4 executed!
28 - afterEACH execution
.29 - beforeEach execution
30 - beforeEach execution - executed in declaration order
TEST number 5 executed!
31 - afterEACH execution
.32 - afterALL execution
*/
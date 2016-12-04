

xdescribe('DESCRIBE1', ()=> {
    beforeEach(()=>{
        console.log('beforeEACH executed!')
    })

    beforeAll(()=>{
        console.log('beforeALL executed!')
    })

    afterEach(()=>{
        console.log('afterEACH executed!')
    })

    afterAll(()=>{
        console.log('afterALL executed!')
    })

    describe('NESTED DESCRIBE!', ()=>{
        beforeEach(()=>{
            console.log('NESTED beforeEach executed!')
        })
        

        it('NESTED TEST!', ()=> {
            console.log('NESTED TEST! executed!')
        })
    })
    
    let datas = [{name: 'name', firstValue: 2, expected:false}, '2', '3']
    datas.map(data=>{
        it(`TEST1 for ${data.name}`, ()=>{
            console.log(`TEST1 executed! with data ${data.firstValue}`)

        })
    })
    
})

/////////////////////////////////////////////////////////////////////////////
// PROTRACTOR handle non-existing elements

    
    let nonExists = $('SOMENONEXTISTING ELEMENT!')

    // Notice that in this case error will not be thrown, and will not break the test
    nonExists.getText().then(
        text=> console.log(text),
        err=> console.log('CANNOT FIND YOUR ELEMENT')
    )

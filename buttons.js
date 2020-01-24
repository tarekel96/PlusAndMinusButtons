document.addEventListener('DOMContentLoaded', function () {


let percentageNumber = document.querySelector('.button--an-percentage')
    // declare annuity percent value
    numberValue = null;
    // on click increment value 
const incrementAmt = 5,
      decrementAmt = -(incrementAmt);
      plusButton = document.querySelector('#btn-plus'),
      minusButton = document.querySelector('#btn-minus');
// let progressBar = ToxProgress.toxProgressBars[0];
//       console.log(progressBar)


function initialize() {
    // JS way of adjusting percent annuity value
    percentageNumber.innerHTML = `${0} %`;
}

initialize();

// sets the border styling for the button
function updateBar() {
    ToxProgress.create();
    ToxProgress.toxProgressBars[0].progress = numberValue;
    ToxProgress.animate();
}

function updateNumber() {
    // JS way of adjusting percent annuity value
    return percentageNumber.innerHTML = `${numberValue} %`;
    // console.log(percentageNumber.innerHTML = `${numberValue} %`)
}

// increment function for the '+' sign
function increment(num) {
   
    console.log('increment')

    // cap for the max that user can set
    const CAP = 100
    
    
    // prevNum - html string value - convert it to a number
    let prevNum = Number(num);   

    if(num === CAP) {        
        // stringify number back to string data type        
        strDecimal = String(CAP);   
        return strDecimal;
    }

    // initialize function variables 
    let newNum; // new number after adding the increment number
    let strDecimal; // variable needed to convert value back to decimal
    newNum = prevNum + incrementAmt;
    // resets the numberValue to update the HTML  
    numberValue = newNum;
    // stringify number back to string data type        
    strDecimal = String(newNum);   
    return strDecimal;
    
}

// plus click handler
plusButton.addEventListener('click', () => {
    percentageNumber.innerHTML = `${increment(numberValue)} %`;
    console.log(numberValue);
    updateNumber();
    updateBar(); 
})

// increment function for the '+' sign
function decrement(num) {

    // cap for the min that user can set
    const CAP = 0;

    if(num === CAP) {

        // stringify number back to string data type        
        strDecimal = String(CAP);   
        return strDecimal;

    }
    
    // prevNum - html string value - convert it to a number
    let prevNum = Number(num);   
    // initialize function variables 
    let newNum; // new number after adding the decrement number
    let strDecimal; // variable needed to convert value back to decimal
    newNum = prevNum + decrementAmt;
    // resets the numberValue to update the HTML  
    numberValue = newNum;
    // stringify number back to string data type        
    strDecimal = String(newNum);   
    return strDecimal;
    
}

// plus click handler
minusButton.addEventListener('click', () => {
    percentageNumber.innerHTML = `${decrement(numberValue)} %`;
    console.log(numberValue);
    updateNumber();
    updateBar(); 
})

})
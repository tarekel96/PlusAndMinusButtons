let percentageNumber = document.querySelector('.button--an-percentage')
    // initialize annuity percent value
    numberValue = 0;
    // on click increment value 
const incrementAmt = 5,
      decrementAmt = -(incrementAmt);
      plusButton = document.querySelector('#btn-plus'),
      minusButton = document.querySelector('#btn-minus');

// JS way of adjusting percent annuity value
percentageNumber.innerHTML = `${numberValue} %`;

// increment function for the '+' sign
function increment(num) {
    
    // prevNum - html string value - convert it to a number
    let prevNum = Number(num);   
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
})

// increment function for the '+' sign
function decrement(num) {
    
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
})


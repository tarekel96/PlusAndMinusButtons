// FIXME -- progress bar package - would need to use require.js
// let ProgressBar = require('progressbar.js');

document.addEventListener('DOMContentLoaded', function () {
    ToxProgress.create();
    ToxProgress.animate();
});

console.log(ToxProgress)

let percentageNumber = document.querySelector('.button--an-percentage')
    // initialize annuity percent value
    numberValue = 0;
    // on click increment value 
const incrementAmt = 5,
      decrementAmt = -(incrementAmt);
      plusButton = document.querySelector('#btn-plus'),
      minusButton = document.querySelector('#btn-minus');

  
// sets the border styling for the button
function initializeButton() {
    percentageNumber.style.border = "thick solid white";
    // percentageNumber.style.border = "thick solid white";
    // percentageNumber.style.borderRadius = '50px';
    
}

// initialize button styles
initializeButton(); 


// JS way of adjusting percent annuity value
percentageNumber.innerHTML = `${numberValue} %`;

// increment function for the '+' sign
function increment(num) {

    // cap for the max that user can set
    const CAP = 100,
          BORDER_TOP_LEFT = 20,
          BORDER_TOP_RIGHT = 45,
          BORDER_BOT_RIGHT = 70,
          BORDER_BOT_LEFT = 95,
          BORDER_EDGE_NUM = '300px';
    
    
    // prevNum - html string value - convert it to a number
    let prevNum = Number(num);   

    if(num === CAP) {
        
        // stringify number back to string data type        
        strDecimal = String(CAP);   
        return strDecimal;

    }


    // FIXME semi-circle code looks good but not the same as figma/mockup
    if(num === 45) {
       percentageNumber.style.borderTopLeftRadius = BORDER_EDGE_NUM;
       percentageNumber.style.borderLeftColor = 'black';
    }

    if(num === 95) {
        percentageNumber.style.borderTopRightRadius = BORDER_EDGE_NUM; 
        percentageNumber.style.borderRightColor = 'black';
        percentageNumber.style.borderTopColor = 'black';
        
    }

    // // FIXME full-circle code but looks like a pill
    // if(num === BORDER_TOP_LEFT) {
    //     percentageNumber.style.borderTopLeftRadius = BORDER_EDGE_NUM;
    // }

    // if(num === BORDER_TOP_RIGHT) {
    //     percentageNumber.style.borderTopRightRadius = BORDER_EDGE_NUM;
    // }

    // if(num === BORDER_BOT_RIGHT) {
    //     percentageNumber.style.borderBottomRightRadius = BORDER_EDGE_NUM;
    // }

    // if(num === BORDER_BOT_LEFT) {
    //     percentageNumber.style.borderBottomLeftRadius = BORDER_EDGE_NUM;
    // }

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
})


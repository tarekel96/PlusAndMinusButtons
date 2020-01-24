document.addEventListener('DOMContentLoaded', function () {


    let percentageNumber = document.querySelector('.button--an-percentage')
        // declare annuity percent value
        numberValue = 0;
        // on click increment value 
    const incrementAmt = 5,
          decrementAmt = -(incrementAmt);
          plusButton = document.querySelector('#btn-plus'),
          minusButton = document.querySelector('#btn-minus');


    
    let radialObj = radialIndicator('#indicatorContainer', {
        barColor : '#87CEEB',
        barWidth : 10,
        initValue : 0,
        percentage: true
    });
     
    // //Using Instance
    radialObj.animate(); 

    function updateBar(num) {
        return radialObj.animate(num);
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
        updateBar(increment(radialObj.current_value));   
         
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
        updateBar(decrement(radialObj.current_value));   
        })
    })
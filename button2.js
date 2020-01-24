document.addEventListener('DOMContentLoaded', function () {


        // declare annuity percent value
        numberValue = 0;
        // on click increment value 
    const incrementAmt = 5,
          decrementAmt = -(incrementAmt);
          plusButton1 = document.querySelector('#btn-plus1'),
          minusButton1 = document.querySelector('#btn-minus1'),
          plusButton2 = document.querySelector('#btn-plus2'),
          minusButton2 = document.querySelector('#btn-minus2');
    
    let radialObj1 = radialIndicator('#indicatorContainer', {
        barColor : '#87CEEB',
        barWidth : 10,
        initValue : 0,
        percentage: true
    });

    let radialObj2 = radialIndicator('#indicatorContainer2', {
        barColor : '#87CEEB',
        barWidth : 10,
        initValue : 0,
        percentage: true
    });
     
    // //Using Instance
    radialObj1.animate(); 

    // //Using Instance
    radialObj2.animate(); 

    function updateBar(num) {
        
        // init vars that handle synch cap logic
        // cap for the max that user can set
        const CAP = 100;
        let currentBar1Num = radialObj1.current_value,
            currentBar2Num = radialObj2.current_value,
            combinedNum = currentBar1Num + currentBar2Num + increment;

        // ensures the 100 cap is not exceeded by combined bar percents
        if((combinedNum) === CAP) {   
            console.log('HERE')           
            return;
          } 

        else {
            let remainder = 0;
            remainder = 100 - num ;
            radialObj1.animate(num)
            radialObj2.animate(remainder);
            return;
        }

    }

    function updateBar2(num) {
        
        // init vars that handle synch cap logic
        // cap for the max that user can set
        const CAP = 100;
        let currentBar1Num = radialObj1.current_value,
            currentBar2Num = radialObj2.current_value,
            combinedNum = currentBar1Num + currentBar2Num + increment;

        // ensures the 100 cap is not exceeded by combined bar percents
        if((combinedNum) === CAP) {   
            console.log('HERE')           
            return;
          } 

        else {
            let remainder = 0;
            remainder = 100 - num ;
            radialObj2.animate(num)
            radialObj1.animate(remainder);
            return;
        }

    }
    
    // increment function for the '+' sign
    function increment(num) {

       
        console.log('increment')
        
        
        // prevNum - html string value - convert it to a number
        let prevNum = Number(num);   
        
    
        // initialize function variables 
        let newNum; // new number after adding the increment number
        let strDecimal; // variable needed to convert value back to decimal
        newNum = prevNum + incrementAmt;
        // stringify number back to string data type        
        strDecimal = String(newNum);   
        return strDecimal;
        
    }
    
    // plus click handler
    plusButton1.addEventListener('click', () => {
        updateBar(increment(radialObj1.current_value));   
         
    })

    // plus click handler
    plusButton2.addEventListener('click', () => {
        updateBar2(increment(radialObj2.current_value));   
         
    })
    
    // increment function for the '+' sign
    function decrement(num) {

        // init vars that handle synch cap logic
        let currentBar1Num = radialObj1.current_value;
        let currentBar2Num = radialObj2.current_value;
        let combinedNum = currentBar1Num + currentBar2Num;

    
        // cap for the min that user can set
        const CAP = 0;
    
        // ensures the 0 cap is not passed by combined bar percents
        if((combinedNum) === CAP) {    
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
        // stringify number back to string data type        
        strDecimal = String(newNum);   
        return strDecimal;        
    }
    
    // minus click handler
    minusButton1.addEventListener('click', () => {
        updateBar(decrement(radialObj1.current_value));   
        })

    // minus click handler
    minusButton2.addEventListener('click', () => {
        updateBar2(decrement(radialObj2.current_value));   
        })    


    })
    
let runningTotal = 0 
let buffer= "0"
let previousOperator;

const screen = document.querySelector(".screen")

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value)
    } else{
        handleNumber(value)
    }
    screen.innerText = buffer
}

function handleSymbol(symbol){
    switch(symbol){
         case 'c':
            buffer = '0' 
            runningTotal = 0
            break
        case '=': 
        if(previousOperator === 0 ){return}
        flushOperation(parseInt(buffer));
        previousOperator = null
        buffer = runningTotal
        runningTotal = 0;
        break
        case '←': 
            buffer = '0'
        break
        case '+':
        case '-':    
        case 'x':
        case'÷': 
            handleMath(symbol)     
            break  
    }
    
}
 function handleMath(symbol){
    if(buffer === 0 ){
        return }
    
    const inBuffer = parseInt(buffer)
    if(runningTotal === 0){
        runningTotal = inBuffer
    }else{
        flushOperation(inBuffer)}
    previousOperator = symbol
    buffer = '0'
}

function flushOperation(inBuffer){
    if(previousOperator === '+'){
        runningTotal += inBuffer
    }
    else if( previousOperator === '-'){
        runningTotal -= inBuffer
    }
    else if( previousOperator === 'x'){
        runningTotal *= inBuffer
    }
    else if( previousOperator === '÷'){
        runningTotal /= inBuffer
    }       
}

function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString
    } else{
        buffer += numberString
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click',function(event){
        buttonClick(event.target.innerText)
    })
}
init()
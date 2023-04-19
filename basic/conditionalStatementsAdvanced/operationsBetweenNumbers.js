function operationsBetweenNumbers(input){
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let operation = input[2];
    let result = 0;

    switch (operation) {
        case "+": result = numberOne + numberTwo; break; 
        case "-": result = numberOne - numberTwo; break;
        case "*": result = numberOne * numberTwo; break;  
        case "/": result = numberOne / numberTwo; break;
        case "%": result = numberOne % numberTwo; break;
    }


    if (operation == "+" || operation == "-" || operation == "*"){
        let evenOrOdd = result % 2;
        if (evenOrOdd == 0){
            console.log(`${numberOne} ${operation} ${numberTwo} = ${result} - even`);
        } else {
            console.log(`${numberOne} ${operation} ${numberTwo} = ${result} - odd`);
        }   
    } else if (operation == "/"){
        if (numberTwo == 0){
            console.log(`Cannot divide ${numberOne} by zero`);
        } else {
        console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`)
        }
    } else if (operation == "%"){
        if (numberTwo == 0){
            console.log(`Cannot divide ${numberOne} by zero`);
        } else {
        console.log(`${numberOne} % ${numberTwo} = ${result}`);
        }
    }

}

//operationsBetweenNumbers(["10","3","%"])

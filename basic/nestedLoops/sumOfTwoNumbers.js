function sumOfTwoNumbers(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFound = false;
    let pairsCount = 0;

    for (let num1 = startNum; num1 <= endNum; num1++){
        for (let num2 = startNum; num2 <= endNum; num2++){
            pairsCount++;
            let sum = num1 + num2;

            if (sum == magicNum){
                isFound = true;
                console.log(`Combination N:${pairsCount} (${num1} + ${num2} = ${magicNum})`);
                break;
            }
        }

        if (isFound == true){
            break;
        }
    }

    if (isFound == false){
        console.log(`${pairsCount} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["23", "24", "20"])


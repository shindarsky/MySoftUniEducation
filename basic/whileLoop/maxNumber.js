function maxNumber(input){
    let index = 0;
    let command = input[index];
    index++;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while(command !== "Stop"){
        let currentNum = Number(command);
        
        if(maxNumber < currentNum){
            maxNumber = currentNum;
        }

        command = input[index];
        index++;
    }
    console.log(maxNumber);
}

maxNumber(["-10",
"Stop"])


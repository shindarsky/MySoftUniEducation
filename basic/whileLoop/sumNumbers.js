function sumNumbers(input){
    let index = 0;
    let sum = 0;
    let num = Number(input[index]);
    index ++;
    let currentNum = Number(input[index]);
    index ++;

    while(sum < num ){
        sum += currentNum;
        currentNum = Number(input[index]);
        index++;       
    }
    console.log(sum);
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

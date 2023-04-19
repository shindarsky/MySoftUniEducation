function sequence2kPlus1(input){
    let index = 0;
    let num = Number(input[index]);
    index ++;

    while (index <= num){
        console.log(index);
        index = index * 2 + 1;
    }
}

sequence2kPlus1(["8"])
function solve(array, sum) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let nextNum = array[j];
            if (currentNum + nextNum === sum) {
                newArray.push(`${currentNum} ${nextNum}`);
            }
        }
    }
    console.log(newArray.join('\n'));
}

// solve([14, 20, 60, 13, 7, 19, 8],27);
solve([1, 2, 3, 4, 5, 6],6);
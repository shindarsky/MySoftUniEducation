function mergeArrays(arrOne, arrTwo) {
    let arrThree = [];
    for (let i = 0; i < arrOne.length; i++) {
        if (i % 2 == 0) {
            arrThree[i] = Number(arrOne[i]) + Number(arrTwo[i]);
        } else {
            arrThree[i] = arrOne[i] + arrTwo[i];
        }
    }
    console.log(arrThree.join(' - '));
}

// mergeArrays(['13', '12312', '5', '77', '4'],
//     ['22', '333', '5', '122', '44']
// );
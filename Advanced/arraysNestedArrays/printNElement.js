function printNElement(array, n) {
    let result = [];

    for (let index = 0; index < array.length; index += n) {
        result.push(array[index]);
    }
    return result;
}

// console.log(printNElement(['5',
//     '20',
//     '31',
//     '4',
//     '20'],
//     2
// ));

// console.log(printNElement(['dsa',
//     'asd',
//     'test',
//     'tset'],
//     2
// ));

// console.log(printNElement(['1',
//     '2',
//     '3',
//     '4',
//     '5'],
//     6
// ));
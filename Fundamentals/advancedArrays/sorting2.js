function sort(arr) {
    arr.sort((a, b) => a - b);

    let sorted = [];
    while (arr.length !== 0) {
        sorted.push(arr.pop());
        sorted.push(arr.shift());
    }

    console.log(sorted.join(' '));
}

sort([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
function maxNumber(array) {
    let newArr = [];
    let resArr = [];
    let bigger = Number.MIN_SAFE_INTEGER;

    for (let i = array.length; i > 0; i--) {
        let num = array[i - 1];
        if (num > bigger) {
            newArr.push(num);
            bigger = num;
        }
    }

    for (let j = newArr.length; j > 0; j--) {
        resArr.push(newArr[j - 1]);
    }

    console.log(resArr.join(' '));
}

// maxNumber([27, 19, 42, 2, 13, 45, 48]);

// maxNumber([1, 4, 3, 2])

maxNumber([41, 41, 34, 20]);
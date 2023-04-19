function solve(arr) {
    let temp = '';
    let sequence = 0;
    let maxSequence = 0;
    let numberIs = 0;
    let buff = '';
    for (let i = 0; i < arr.length; i++) {
        if (temp != '' && temp == arr[i]) {
            sequence++;
        } else {
            sequence = 1;
        }
        temp = arr[i];
        if (sequence > maxSequence) {
            maxSequence = sequence;
            numberIs = arr[i];
        }
    }
    for (let i = 0; i < maxSequence; i++) {
        buff += numberIs + " ";
    }
    console.log(buff);
}


solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
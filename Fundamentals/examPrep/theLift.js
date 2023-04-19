function theLift(input) {
    let queue = Number(input[0]);
    let cabins = input[1].split(' ').map(Number);
    for (let i = 0; i < cabins.length; i++) {
        while (cabins[i] < 4 && queue > 0) {
            cabins[i]++;
            queue--;
        }
    }
    if (queue > 0) {
        console.log(`There isn't enough space! ${queue} people in a queue!
${cabins.join(' ')}`);
    } else if (queue === 0 && cabins[cabins.length - 1] === 4) {
        console.log(`${cabins.join(' ')}`);
    } else {
        console.log(`The lift has empty spots!
${cabins.join(' ')}`);
    }
}

theLift(["15","0 0 0 0 0"]);
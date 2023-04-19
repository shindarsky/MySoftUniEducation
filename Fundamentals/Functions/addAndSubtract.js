function addAndSubtract(a, b, c) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    
    let sum = add(a, b);
    let result = subtract(sum, c);

    return result;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));
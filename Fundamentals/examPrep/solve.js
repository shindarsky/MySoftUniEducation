function test(numberString) {
    const numberArray = numberString.split(" ").map(Number);
    const average = numberArray.reduce((a, b) => a + b, 0) / numberArray.length;
    const outputNumberArray = numberArray.filter((a) => a > average);
    return (outputNumberArray.length > 0) ? outputNumberArray.sort((a, b) => b - a).slice(0, 5).join(" ") : "No"
}

console.log(test('10 20 30 40 50'));
console.log(test('1'));
console.log(test('-1 -2 -3 -4 -5 -6'));
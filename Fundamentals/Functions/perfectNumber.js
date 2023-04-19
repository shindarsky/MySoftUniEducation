function isPerfect(num) {
    let divisors = [];
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    const sum = divisors.reduce((a, b) => a + b, 0);
    if (sum === num) {
      console.log("We have a perfect number!");
    } else {
      console.log("It's not so perfect.");
    }
}
// isPerfect(6);
// isPerfect(28);
// isPerfect(1236498);
  
function numbers(input) {
    let masiv = input.split(" ")
        .map(x=> Number(x));

    let suma = masiv.reduce((acc, currentVal) => acc + currentVal, 0);
    let result = masiv.filter(value => value > suma / masiv.length)
        .sort((a,b) => b - a)
        .splice(0,5);

    console.log(result.length > 0 ? result.join(" ") : "No");
}

numbers('10 20 30 40 50');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');
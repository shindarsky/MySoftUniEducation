function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let NOK = 0;
    let NOD = 0;
    let sum = 0;
    let multiply = 0;
    multiply = a * b;

    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }

    NOD = a;
    NOK = multiply / NOD;
    sum = NOK + NOD;
    console.log(sum);
}

solve([8, 12]);
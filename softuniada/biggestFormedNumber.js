function solve(input) {
    let myArr = input.shift().split(" ").map(Number);
    myArr.sort((a,b) => {
        return b - a;
    });
    
    console.log(myArr.join(""));
}

// solve(['3 30 34 5 9']);
// solve(['9 5 6 4 3 2'])
solve(['1 3 4 5 3 2'])
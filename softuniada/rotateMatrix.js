function rotateMatrix(n, input) {
    let matrixRow = [];
    for (let i = 1; i < n; i++) {
        matrixRow.push(input[i]);
       
    }

    return matrixRow.join(" ");
}

console.log(rotateMatrix([3, '3 11 7', '14 6 9','10 5 2']))
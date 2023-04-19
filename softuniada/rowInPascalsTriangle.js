function getPascalRow(rowIndex) {
    let row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        let prev = 1;
        for (let j = 1; j < i; j++) {
            let current = row[j];
            row[j] = prev + current;
            prev = current;
        }
        row.push(1);
    }

    return row.join(" ");
}

console.log(getPascalRow(3))
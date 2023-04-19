function christmasPreparation(input){
    let packigingPaper = Number(input[0]);
    let rollsFabric = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);

    let sum = 0;
    sum = packigingPaper * 5.80 + rollsFabric * 7.20 + glue * 1.20;
    sum = sum - (sum * discount / 100);

    console.log(sum.toFixed(3));
}

christmasPreparation(["4",
"2",
"5",
"13"])



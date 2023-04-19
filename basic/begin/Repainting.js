function repainting(input){
    let paintPrice = 14.50;
    let paintThinnnerPrice = 5.00;
    let nylonPrice = 1.50;
    let bags = 0.40;

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number (input[2]);
    let hours = Number(input[3]);

    let totalAmount = ((paint + paint * 0.1) * paintPrice) + (paintThinner * paintThinnnerPrice) + ((nylon + 2) * nylonPrice) + bags;
    let totalMaster = (totalAmount * 30 / 100) * hours;
    let totalExpenses = (totalMaster + totalAmount);

    console.log(totalExpenses);
}

//repainting(["10","11","4","8"])
//repainting(["5","10","10","1"])

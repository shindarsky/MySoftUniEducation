function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depositMonths = Number(input[1]);
    let interestRate = Number(input[2]) / 100;

    let finalAmount = depositAmount + depositMonths * ((depositAmount * interestRate) / 12)

    console.log(finalAmount)
}


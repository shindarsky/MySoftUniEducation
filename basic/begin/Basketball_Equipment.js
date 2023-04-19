function basketballEquipment(input){
    let annualFee = Number(input[0]);
    
    let snikers = annualFee - (annualFee * 0.4);
    let suit = snikers - (snikers * 0.2);
    let ball = suit / 4;
    let accesoaries = ball / 5;

    let expenses = annualFee + snikers + suit + ball + accesoaries;

    console.log(expenses);
}

//basketballEquipment(["365"])
//basketballEquipment(["550"])
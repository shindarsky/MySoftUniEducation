function petShop(input){
    let dogFood = 2.5;
    let catFood = 4;
    
    let dogPackages = Number(input[0]);
    let catPackages = Number(input[1]);

    let totalPrice = dogPackages * dogFood + catPackages * catFood;

    console.log(totalPrice + " lv.");
}

//petShop(["5","4"])
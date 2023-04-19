function foodDelivery(input){
    let chiken = 10.35;
    let fish = 12.40;
    let vegiterian = 8.15;
    let delivery = 2.50;

    let chikenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegiterianMenus = Number(input[2]);

    let price = chikenMenus * chiken + fishMenus * fish + vegiterianMenus * vegiterian;
    let desert = price * 0.2;
    let finalAmount= price + desert + delivery;

    console.log(finalAmount);
}

//foodDelivery(["2","4","3"])
//foodDelivery(["9","2","6"])
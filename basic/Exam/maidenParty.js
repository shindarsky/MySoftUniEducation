function maidenParty(input){
    let priceParty = Number(input[0]);
    let loveMessage = Number(input[1]);
    let roses = Number(input[2]);
    let keyholders = Number(input[3]);
    let cartoon = Number(input[4]);
    let luckSurprise = Number(input[5]);
    
    let priceFromSales = 0;
    let salesCount = 0;

    priceFromSales = loveMessage * 0.60 + roses * 7.20 + keyholders * 3.60 + cartoon * 18.20 + luckSurprise * 22;
    salesCount = loveMessage + roses + keyholders + cartoon + luckSurprise;

    if (salesCount >= 25){
        priceFromSales *= 0.65;
    }
     
    priceFromSales = priceFromSales - (priceFromSales * 0.10); // hosting

    if(priceParty >= priceFromSales){
        console.log(`Not enough money! ${(priceParty - priceFromSales).toFixed(2)} lv needed.`);
    } else {
        console.log(`Yes! ${(priceFromSales - priceParty).toFixed(2)} lv left.`);
    }
}

maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"])

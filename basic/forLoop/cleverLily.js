function cleverLily(input){
    let age = Number(input[0]);
    let priceWashing = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toyCount = 0;
    let money = 0;
    let brotherTake = 0;
    let moneySaved = 0;
    let totalMoney = 0;

    for (let i = 1; i <= age; i += 2){
        toyCount += 1;
    }

    for (let i= 2; i <= age; i += 2){
        money += 10;
        brotherTake += 1;
        moneySaved += money;
    }

    totalMoney = (toyCount * toyPrice) + moneySaved - brotherTake;

    if (totalMoney >= priceWashing){
        console.log(`Yes! ${(totalMoney - priceWashing).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashing - totalMoney).toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"])


function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statists= Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = budget * 0.10;
    let clothesSum = statists * clothesPrice;
    
    if (statists > 150){
        clothesSum *= 0.90;
    }

    let totalSum = decor + clothesSum;

    if (totalSum <= budget){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);
    }

}

godzillaVsKong(["9587.88",
"222",
"55.68"])

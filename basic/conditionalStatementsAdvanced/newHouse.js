function newHouse(input){
    let rosesPrice = 5;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;
    
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let finalPrice = 0;

    if (flowerType === "Roses"){
        if (flowerCount > 80){
            finalPrice = flowerCount * rosesPrice * 0.90;                 
        } else {
            finalPrice = flowerCount * rosesPrice;
        }
    } else if (flowerType === "Dahlias"){
        if (flowerCount > 90){
            finalPrice = flowerCount * dahliasPrice * 0.85;                 
        } else {
            finalPrice = flowerCount * dahliasPrice;
        }
    } else if (flowerType === "Tulips"){
        if (flowerCount > 80){
            finalPrice = flowerCount * tulipsPrice * 0.85;                 
        } else {
            finalPrice = flowerCount * tulipsPrice;
        }
    } else if (flowerType === "Narcissus"){
        if (flowerCount < 120){
            finalPrice = flowerCount * narcissusPrice * 1.15;                 
        } else {
            finalPrice = flowerCount * narcissusPrice;
        }
    } else if (flowerType === "Gladiolus"){
        if (flowerCount < 80){
            finalPrice = flowerCount * gladiolusPrice * 1.20;                 
        } else {
            finalPrice = flowerCount * gladiolusPrice;
        }
    }

    if (budget >= finalPrice){
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - finalPrice).toFixed(2)} leva left.`);            
    } else {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`);
    }
}

//newHouse(["Roses","55","250"])

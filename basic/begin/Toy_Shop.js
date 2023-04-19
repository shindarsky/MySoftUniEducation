function toyShop(input){
    
    let puzzlesPrice = 2.60;
    let dollsPrice = 3;
    let teddysPrice = 4.10;
    let minionsPrice = 8.20;
    let trucksPrice = 2;

    let vacationCost = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddys = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    

    let totalToys = (puzzles + dolls + teddys + minions + trucks);
    let totalPrice = (puzzles * puzzlesPrice + dolls * dollsPrice
         + teddys * teddysPrice + minions * minionsPrice + trucks * trucksPrice);
    
    if (totalToys >= 50 ){
        totalPrice *= 0.75;    
    }  
    
    totalPrice = totalPrice * 0.90;
    
    if (totalPrice >= vacationCost){
        console.log(`Yes! ${(totalPrice - vacationCost).toFixed(2)} lv left.`);        
    } else {
        console.log(`Not enough money! ${(vacationCost - totalPrice).toFixed(2)} lv needed.`);
    }
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])


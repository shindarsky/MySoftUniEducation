function excursionSale(input) {
    let excursionSea = Number(input[0]);
    let excursionMountain = Number(input[1]);
    let profit = 0;
    let i = 2;
    let command = input[i];
    i++;
    while (command != "Stop") {
        if(command == "sea"){
            profit += 680;
            excursionSea--;
        }    
        if (command == "mountain") {
            profit += 499;
            excursionMountain--;
        }    
        
        
        if (excursionMountain == 0 && excursionSea == 0) {
            console.log(`Good job! Everything is sold.`);
            break;
        }
        command = input[i];
        i++;
    }

    console.log(`Profit: ${profit} leva.`);
}

excursionSale(["2","2","sea","mountain","sea","sea","mountain"])



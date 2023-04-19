function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let place = "";
    let price = 0;
    let placeType= "";

    if (budget <= 100){
        place = "Bulgaria";
        if (season == "summer"){
            price = budget * 0.30;
            placeType = "Camp";
        } else if (season == "winter"){
            price = budget * 0.70;
            placeType = "Hotel";
        }   
    } else if (budget <= 1000){
        place = "Balkans";
        if (season == "summer"){
            price = budget * 0.40;
            placeType = "Camp";
        } else if (season == "winter"){
            price = budget * 0.80;
            placeType = "Hotel";
        }
    } else if (budget > 1000){
        place = "Europe";
        price = budget * 0.90;
        placeType = "Hotel";
    }      

    console.log(`Somewhere in ${place}`);
    console.log(`${placeType} - ${price.toFixed(2)}`);
}

journey(["1500","winter"])
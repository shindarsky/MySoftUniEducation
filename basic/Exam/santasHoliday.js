function santasHoliday(input){
    let days = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];

    let nights = days - 1;
    let price = 0;

    switch (roomType){
        case "room for one person":
            if(days < 10){
                price = nights * 18;
            } else if ( days >= 10 && days <= 15){
                price = nights * 18;
            } else {
                price = nights * 18;
            }
            break;
        case "apartment":
            if(days < 10){
                price = nights * 25;
                price *= 0.70;
            } else if ( days >= 10 && days <= 15){
                price = nights * 25;
                price *= 0.65;
            } else {
                price = nights * 25;
                price *= 0.50;
            }
            break;
        case "president apartment":
            if(days < 10){
                price = nights * 35;
                price *= 0.90;
            } else if ( days >= 10 && days <= 15){
                price = nights * 35;
                price *= 0.85
            } else {
                price = nights * 35;
                price *= 0.80;
            }
            break;          
    }

    if (grade == "positive"){
        price *= 1.25;
    } else {
        price *= 0.90;
    }
    console.log(price.toFixed(2));
}

santasHoliday(["30",
"president apartment",
"negative"])



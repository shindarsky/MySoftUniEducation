function skiTrip(input){
    let days = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];
    let nights = days - 1;
    let price = 0;

    switch (roomType){
        case "room for one person":
            price = nights * 18.00; break;
        case "apartment":
            price = nights * 25.00;
            if (days < 10){
                price *= 0.70;
            } else if (days >= 10 && days <=15){
                price *= 0.65;
            } else {
                price *= 0.50;
            } break;
        case "president apartment":
            price = nights * 35.00;
            if (days < 10){
                price *= 0.90;
            } else if (days >= 10 && days <=15){
                price *= 0.85;
            } else {
                price *= 0.80;
            } break;                
    }

    if (grade == "positive"){
        price *= 1.25;
    } else if (grade == "negative"){
        price *= 0.90;
    }   

    console.log(price.toFixed(2));
}

//skiTrip(["2","apartment","positive"])


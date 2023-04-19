function shopping(input){

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let proccesors = Number(input[2]);
    let pamet = Number(input[3]);

    let videoCardsPrice = 250;
    let allVideoCardsPrice = videoCardsPrice * videoCards;
    let proccesorsPrice = (allVideoCardsPrice * 0.35) * proccesors;
    let pametPrice = (allVideoCardsPrice * 0.10) * pamet;

    let total = allVideoCardsPrice + proccesorsPrice + pametPrice;

    if (videoCards > proccesors){
        total *= 0.85;
    }

    if (budget >= total){
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }

}

shopping(["920.45",
"3",
"1",
"1"])


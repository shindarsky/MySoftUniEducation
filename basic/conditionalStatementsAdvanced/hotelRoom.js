function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);

    let totalPriceStudio = 0;
    let totalPriceApartment = 0;

    if (month == "May" || month == "October"){
        totalPriceStudio = nights * 50;
        totalPriceApartment = nights * 65;
        if (nights > 14){
            totalPriceStudio *= 0.70;
        } else if (nights > 7 && nights <14){
            totalPriceStudio *= 0.95;
        }  
    } else if (month == "June" || month == "September"){
        totalPriceStudio = nights * 75.20;
        totalPriceApartment = nights * 68.70;
        if (nights > 14){
            totalPriceStudio *= 0.80;
        }
    } else if (month == "July" || month == "August"){
        totalPriceStudio = nights * 76;
        totalPriceApartment = nights * 77;
    } 

    if (nights > 14){
            totalPriceApartment *= 0.90;
        }
        

    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}

hotelRoom(["May","15"])

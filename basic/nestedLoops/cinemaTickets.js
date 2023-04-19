function cinemaTickets(input) {
    let studentCurrent = 0;
    let standartCurrent = 0;
    let kidCurrent = 0;
    let totalTickets = 0;

    let i = 0;
    let currentMovie = input[i];
    i++;

    while (currentMovie != "Finish") {
        let seatAvailable = Number(input[i]);
        i++;
        let seatSold = 0;

        while (true) {
            if(seatAvailable == seatSold){
                break;
            }

            let currentTicket = input[i];
            i++;

            if (currentTicket == "End"){
                break;
            }

            seatSold++;
            totalTickets++;
            if (currentTicket == "student"){
                studentCurrent++;
            } else if(currentTicket == "standard"){
                standartCurrent++;
            } else if(currentTicket == "kid") {
               kidCurrent++; 
            }

        }

        console.log(`${currentMovie} - ${(100 * seatSold / seatAvailable).toFixed(2)}% full.`);
    
        currentMovie = input[i];
        i++;
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(100 * studentCurrent / totalTickets).toFixed(2)}% student tickets.`);
    console.log(`${(100 * standartCurrent / totalTickets).toFixed(2)}% standard tickets.`);
    console.log(`${(100 * kidCurrent / totalTickets).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);

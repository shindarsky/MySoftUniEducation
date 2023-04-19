function computerRoom(input){
    let month = input[0];
    let hours = Number(input[1]);
    let people = Number(input[2]);
    let time = input[3];
    let t_hours = 0;
    let h = 0;
    let price = 0;

    switch(time){
        case "day": 
            if(month == "march" || month == "april" || month == "may"){
                t_hours = 10.50; 
                h =10.50;                        
            } else {
                t_hours =12.60;
                h = 12.60;
            }
            break;
        case "night":
            if(month == "march" || month == "april" || month == "may"){
                t_hours = 8.40; 
                h = 8.40;                        
            } else {
                t_hours = 10.20;
                h = 10.20;
            }
            break;
    }
    
    if(people >= 4){
        h -= h * 0.10;
    }

    if(hours >= 5){
        h -= h * 0.5;
    }

    price = ((h * people) * hours).toFixed(2);

    console.log(`Price per person for one hour: ${h.toFixed(2)}`);
    console.log(`Total cost of the visit: ${price}`);

}

computerRoom(["march",
"3",
"3",
"day"])

// computerRoom(["july",
// "5",
// "5",
// "night"])

function energyBooster(input){
    let fruit = input[0];
    let size = input[1];
    let sets = Number(input[2]);
    let sum = 0;

    if (size == "small"){
       switch (fruit){
            case "Watermelon":
                sum = 56 * 2 * sets;
                break;
            case "Mango":
                sum = 36.66 * 2 * sets;
                break; 
            case "Pineapple":
                sum = 42.10 * 2 * sets;
                break;  
            case "Raspberry":
                sum = 20 * 2 * sets;
                break;           
        }
    } else {
        switch (fruit){
            case "Watermelon":
                sum = 28.70 * 5 * sets;
                break;
            case "Mango":
                sum = 19.60 * 5 * sets;
                break; 
            case "Pineapple":
                sum = 24.80 * 5 * sets;
                break;  
            case "Raspberry":
                sum = 15.20 * 5 * sets;
                break;    
        }
    }   

    if (sum >= 400 && sum <= 1000){
        sum *= 0.85;
    } else if (sum > 1000){
        sum *= 0.50;
    }

    console.log(`${sum.toFixed(2)} lv.`);
}


// energyBooster(["Raspberry","small","50"])
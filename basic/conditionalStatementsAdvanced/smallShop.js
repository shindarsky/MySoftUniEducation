function smallShop(input){
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let finalPrice = 0;

    switch (city){
        case "Sofia":               //coffee	water	beer	sweets	peanuts
            if (product == "coffee"){
                finalPrice = quantity * 0.50;
            } else if (product == "water"){
                finalPrice = quantity * 0.80;
            } else if (product == "beer"){
                finalPrice = quantity * 1.20;                    
            } else if (product == "sweets"){
                finalPrice = quantity * 1.45;
            } else if (product == "peanuts"){
                finalPrice = quantity * 1.60;
            } break;
        case "Plovdiv":    
            if (product == "coffee"){
                finalPrice = quantity * 0.40;
            } else if (product == "water"){
                finalPrice = quantity * 0.70;
            } else if (product == "beer"){
                finalPrice = quantity * 1.15;                    
            } else if (product == "sweets"){
                finalPrice = quantity * 1.30;
            } else if (product == "peanuts"){
                finalPrice = quantity * 1.50;
            } break;
        case "Varna":
            if (product == "coffee"){
                finalPrice = quantity * 0.45;
            } else if (product == "water"){
                finalPrice = quantity * 0.70;
            } else if (product == "beer"){
                finalPrice = quantity * 1.10;                    
            } else if (product == "sweets"){
                finalPrice = quantity * 1.35;
            } else if (product == "peanuts"){
                finalPrice = quantity * 1.55;
            } break;                
    }

    console.log(finalPrice);
}

smallShop(["sweets",
"Sofia",
"2.23"])


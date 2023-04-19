function computerFirm(input) {
 
    let model = Number(input[0]);
    let madeSales = 0;
    let averageRating = 0;
 
    for(let i = 1; i <= model; i++) {
 
        let tempRatAndSelComb = (String(input[i]));
 
        let rating;
        let sold;
 
        if (tempRatAndSelComb.length == 2) {
            rating = Number(tempRatAndSelComb.charAt(1));
            sold = Number(tempRatAndSelComb.charAt(0));
        } else {
            rating = Number(tempRatAndSelComb.charAt(2));
            sold = Number(`${tempRatAndSelComb.charAt(0)}${tempRatAndSelComb.charAt(1)}`);
        }
 
        switch(rating) {
            case 2: madeSales += 0 * sold; break;
            case 3: madeSales += 0.5 * sold; break;
            case 4: madeSales += 0.7 * sold; break;
            case 5: madeSales += 0.85 * sold; break;
            case 6: madeSales += sold;
        }
 
        averageRating += rating;
    }
 
    console.log(`${madeSales.toFixed(2)}`);
    console.log(`${(averageRating / model).toFixed(2)}`);
}
 
// computerSales(["5", "122", "156", "202", "214", "185"])

computerFirm(["3",
"103",
"103",
"103"])

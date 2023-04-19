function suppliesForSchool(input){
    let pensPrice = 5.80;
    let markersPrice = 7.20;
    let detergentPrice = 1.20;

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let price = pensPrice * pens + markersPrice * markers + detergentPrice * detergent;
    let totaAmount = price - (price * discount/ 100);
    
    console.log(totaAmount);
}

//suppliesForSchool(["2","3","4","25"])
//suppliesForSchool(["4","2","5","13"])
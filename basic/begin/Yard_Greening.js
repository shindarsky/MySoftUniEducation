function yardGreening(input){
    let singlePrice = 7.61;
    
    let greeningMetres = Number(input[0]);
    let price = greeningMetres * singlePrice;
    let discount = price * 0.18;
    let finalPrice = price - discount;

    console.log("The final price is: " + finalPrice +" lv.");
    console.log("The discount is: " + discount + " lv.")

}

//yardGreening(["550"])
//yardGreening(["150"])
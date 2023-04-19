function careOfPuppy(input){
    let foodBought = Number(input[0]);
    foodBought = foodBought * 1000;
    let totalFoodEaten = 0;

    let i = 1;
    let command = input[i];
    i++;
    while(command !== "Adopted"){
        totalFoodEaten += Number(command);
        command = input[i];
        i++;
    }

    if (foodBought >= totalFoodEaten){
        console.log(`Food is enough! Leftovers: ${foodBought - totalFoodEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${totalFoodEaten - foodBought} grams more.`);
    }
}

careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
;	

function foodForPets(input){
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let biscuits = 0;
    let totalFoodEaten = 0;
    let totalDogEat = 0;
    let totalCatEat = 0;
    let counterDays = 0;

    for(i = 2; i <= (days * 2); i += 2){
        counterDays++;
        let currentDogEat = Number(input[i]);
        let currentCatEat = Number(input[i+1]);

        let currentFoodEaten =  currentDogEat + currentCatEat;
        totalFoodEaten += currentFoodEaten;
        totalDogEat += currentDogEat;
        totalCatEat += currentCatEat;
        if (counterDays % 3 == 0 ){
            biscuits +=  (currentFoodEaten * 0.10);
        }
    }

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${(totalFoodEaten / totalFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(totalDogEat / totalFoodEaten * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(totalCatEat / totalFoodEaten * 100).toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"])



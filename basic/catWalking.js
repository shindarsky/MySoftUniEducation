function catWalking(input){
    let minWalking = Number(input[0]);
    let walkCount = Number(input[1]);
    let caloriesTaken = Number(input[2]);

    let totalWalking = minWalking * walkCount;
    let caloriesBurned = totalWalking * 5;

    if (caloriesBurned >= (caloriesTaken * 0.5)){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }
}


catWalking(["40","2","300"]);
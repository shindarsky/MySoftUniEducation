function lunchBreak(input){

    let seriesName = input[0];
    let seriesDuration = Number(input[1]);
    let brakeDuration = Number(input[2]);

    let lunchDuration = brakeDuration / 8;
    let restDuration = brakeDuration / 4;

    let timeLeft = brakeDuration - lunchDuration - restDuration; 

    if (timeLeft >= seriesDuration){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - seriesDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(seriesDuration - timeLeft)} more minutes.`)
    }
}

lunchBreak(["Teen Wolf","48","60"])


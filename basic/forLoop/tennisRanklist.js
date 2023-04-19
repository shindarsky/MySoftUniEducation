function tennisRanklist(input){
    let tournamentCount = Number(input[0]);
    let startPoints = Number(input[1]);
    let finalPoints = 0;
    let procentWon = 0;
    let procent = 0;
    let averagePoints = 0;
    let points = 0;
    
    for (let i = 0; i < tournamentCount + 2; i++){
        let tournamentPart = input[i + 2];
        if (tournamentPart === "W"){
            procentWon++;
            points += 2000;
        } else if (tournamentPart === "F"){
            points += 1200;
        } else if (tournamentPart === "SF"){
            points += 720;
        }  
    }

    averagePoints = Math.floor(points / tournamentCount);
    finalPoints = points + startPoints;
    procent = procentWon / tournamentCount * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${procent.toFixed(2)}%`)
}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

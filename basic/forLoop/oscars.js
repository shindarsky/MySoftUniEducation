function oscars(input){
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryCount = Number(input[2]);

    for (let i = 0; i < juryCount * 2; i += 2){
        let juryName = input[i + 3];
        let juryPoints = Number(input[i + 4]);

        academyPoints += juryName.length * juryPoints / 2;

        if (academyPoints > 1250.50){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }

    if (academyPoints <= 1250.50){
        console.log(`Sorry, ${actorName} you need ${(1250.50 - academyPoints).toFixed(1)} more!`)
    }
}

oscars([
"Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39",
])

function bestPlayer(input){
    let goals = 0;
    let bestPlayer = "";
    
    let i = 0;
    let command = input[i];
    i++;
    while(command != "END"){
        let playerName = command;
        let currentGoals = Number(input[i]);
        i++;

        if(currentGoals > goals){
            goals = currentGoals;
            bestPlayer = playerName;
        }

        if(goals >= 10){
            break;
        }
        command = input[i];
        i++;
    }
    console.log(`${bestPlayer} is the best player!`);

    if(goals >= 3){
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goals} goals.`);
    }
}

// bestPlayer(["Neymar", "2","Ronaldo","1","Messi","3","END"]);
bestPlayer(["Silva","5","Harry Kane","10"]);


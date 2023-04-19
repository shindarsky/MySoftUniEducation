function steps(input) {
    let stepsGoal = 10000;
    let totalSteps = 0;
    let i = 0;
    let command = input[i];
    i++;
    while (true) {
        if (command !== "Going home") {
            totalSteps += Number(command);
            if (totalSteps >= stepsGoal) {
                console.log(`Goal reached! Good job!`);
                console.log(`${totalSteps - stepsGoal} steps over the goal!`);
                break;
            }
            command = input[i];
            i++;
        } else {
            let additionalSteps = Number(input[i]);
            totalSteps += additionalSteps;

            if (totalSteps >= stepsGoal) {
                console.log(`Goal reached! Good job!`);
                console.log(`${totalSteps - stepsGoal} steps over the goal!`);
                break;
            } else {
                console.log(`${stepsGoal - totalSteps} more steps to reach goal.`);
                break;
            }
        }
    }

}

steps(["125",
"250",
"4000",
"30",
"2678",
"4682"])



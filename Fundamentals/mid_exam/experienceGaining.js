function experienceGaining(input) {
    let neededExp = Number(input[0]);
    let battlesCount = Number(input[1]);
    let expGained = 0;

    for (let i = 1; i <= battlesCount; i++) {
        let curExp = Number(input[i + 1]);
        if (i % 3 == 0) {
            curExp *= 1.15;
        }
        if (i % 5 == 0) {
            if (i == 15) {
                curExp *= 1.05;
            } else {
                curExp *= 0.90;
            }
        }

        expGained += curExp;
        if (expGained >= neededExp) {
            console.log(`Player successfully collected his needed experience for ${i} battles.`);
            break;
        }
    }
    if (expGained < neededExp) {
        console.log(`Player was not able to collect the needed experience, ${(Math.round(neededExp - expGained)).toFixed(2)} more needed.`)
    }
}

experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([500, 5, 50, 100, 200, 100, 20]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);
function spaceTravel(input) {
    let array = input.shift().split("||");
    let gass = Number(input.shift());
    let bulets = Number(input.shift());

    for (const line of array) {
        if (line === "Titan") {
            return console.log("You have reached Titan, all passengers are safe.");
        }

        let tokens = line.split(" ");
        let command = tokens.shift();
        let dis = Number(tokens.shift());

        switch (command) {
            case "Travel":
                if (gass - dis >= 0) {
                    gass -= dis;
                    console.log(`The spaceship travelled ${dis} light-years.`);
                } else {
                    return console.log("Mission failed.");
                }
                break;
            case "Enemy":
                if (bulets >= dis) {
                    bulets -= dis;
                    console.log(`An enemy with ${dis} armour is defeated.`);
                } else {
                    if (gass - dis * 2 > 0) {
                        gass -= dis * 2;
                        console.log(`An enemy with ${dis} armour is outmaneuvered.`);
                    } else {
                        return console.log("Mission failed.");
                    }
                }
                break;
            case "Repair":
                gass += dis;
                bulets += dis * 2;
                console.log(`Ammunitions added: ${dis * 2}.`);
                console.log(`Fuel added: ${dis}.`);
                break;
        }
    }
}
// spaceTravel(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);
spaceTravel(["Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan", "60", "100"]);
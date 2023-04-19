function degustationParty(array) {
    let command = array.shift();
    let mealsObj = {};
    let disliked = 0;
    while (command != 'Stop') {
        command = command.split('-');
        if (command[0] == 'Like') {
            let name = command[1];
            let meal = command[2];
            if (mealsObj.hasOwnProperty(name)) {
                if (mealsObj[name].includes(meal)) {

                } else {
                    mealsObj[name].push(meal);
                }
            } else {
                mealsObj[name] = [];
                mealsObj[name].push(meal);
            }
        } else if (command[0] == 'Dislike') {
            let name = command[1];
            let meal = command[2];
            if (mealsObj.hasOwnProperty(name)) {
                if (mealsObj[name].includes(meal)) {
                    let index = mealsObj[name].indexOf(meal);
                    mealsObj[name].splice(index, 1);
                    console.log(`${name} doesn\'t like the ${meal}.`);
                    disliked++;
                } else {
                    console.log(`${name} doesn\'t have the ${meal} in his/her collection.`);
                }
            } else {
                console.log(`${name} is not at the party.`);
            }
        }
        command = array.shift();
    }
    let workArr = Object.entries(mealsObj);
    let sorted = workArr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }
    console.log(`Unliked meals: ${disliked}`);
}

// degustationParty(["Like-Krisi-shrimps",
//     "Like-Krisi-soup",
//     "Like-Penelope-dessert",
//     "Like-Misho-salad",
//     "Stop"])

// degustationParty(["Like-Krisi-shrimps",
// "Dislike-Vili-carp",
// "Dislike-Krisi-salad",
// "Stop"])

degustationParty(["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"])


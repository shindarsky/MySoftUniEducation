function treasureHunt(input) {
    let store = input.shift().split("|");

    let command = input.shift();
    while (command !== "Yohoho!") {
        let items = command.split(" ");
        let action = items.shift();
        switch (action) {
            case "Loot":
                for (let el of items) {
                    if (store.includes(el)) {
                        continue;
                    }
                    store.unshift(el);
                }
                break;
            case "Drop":
                let index = Number(items[0]);
                if (index < 0 || index > store.length - 1) {
                    command = input.shift();
                    continue;
                }
                let el = store.splice(index, 1);
                store.push(el[0]);
                break;
            case "Steal":
                let count = Number(items[0]);
                let elements = store.splice(-count);
                console.log(elements.join(", "));
                break;
        }
        command = input.shift();
    }
    if (store.length == 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;
        for (let el of store) {
            sum += el.length;
        }
        let average = sum / store.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);
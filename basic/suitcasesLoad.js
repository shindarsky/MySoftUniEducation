function suitcasesLoad(input) {
    let capacityTrunk = Number(input[0]);
    let suitcases = 0;
 
    let i = 1;
    while (true) {
        let command = input[i];
        i++;
 
        if (command == "End") {
            console.log(`Congratulations! All suitcases are loaded!`);
            console.log(`Statistic: ${suitcases} suitcases loaded.`);
            break;
        }
 
        let currentSuitcase = Number(command);
        suitcases++;
 
        if (suitcases % 3 == 0) {
            currentSuitcase = currentSuitcase + (currentSuitcase * 0.10);
        }
        
        capacityTrunk -= currentSuitcase;
 
        if (capacityTrunk <= 0) {
            console.log("No more space!");
            console.log(`Statistic: ${suitcases - 1} suitcases loaded.`);
            break;
        }
    }
 
}

// suitcasesLoad(["550","100","252","72","End"]);
// suitcasesLoad(["700.5","180","340.6","126","220"]);
// suitcasesLoad(["1200.2","260","380.5","125.6","305","End"]);



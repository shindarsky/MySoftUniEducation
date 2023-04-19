function spaceShip(input){
    let spaceShipWidth = Number(input[0]);
    let spaceShipLength = Number(input[1]);
    let spaceShipHeigth = Number(input[2]);
    let spacemanHeigth = Number(input[3]);
    let spaceShipVolume = 0;
    let roomVolume = 0;
    let people = 0;

    spaceShipVolume = spaceShipWidth * spaceShipLength * spaceShipHeigth;
    roomVolume = (spacemanHeigth + 0.40) * 2 * 2;
    people = Math.floor(spaceShipVolume / roomVolume);

    if(people >= 3 && people <= 10){
        console.log(`The spacecraft holds ${people} astronauts.`);
    }else if (people < 3 ){
        console.log(`The spacecraft is too small.`);
    }else if (people > 10){
        console.log(`The spacecraft is too big.`);
    }   
}

// spaceShip(["3.5","4","5","1.70"]);
// spaceShip(["4.5",
// "4.8",
// "5",
// "1.75"])

spaceShip(["3",
"3", 
"4",
"1.68"])

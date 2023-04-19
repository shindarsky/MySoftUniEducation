function moon(input){
    let avarageSpeed = Number(input[0]);
    let fuelFor100Km = Number(input[1]);
    let totalHours = 0;
    let totalFuel = 0;

    totalHours = Math.ceil(768800 / avarageSpeed) + 3;
    totalFuel = (fuelFor100Km * 768800) / 100;

    console.log(totalHours);
    console.log(totalFuel);

}

// moon(["10000","5"]);
moon(["5000", "7"])

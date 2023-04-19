function mountainRun(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let newClimb = distance * time;
    let slowdown = Math.floor(distance / 50) * 30;
    let totalTime = (newClimb + slowdown);

    if (record <= totalTime){
        console.log(`No! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`) 
    }
}

mountainRun(["5554.36","1340","3.23"])
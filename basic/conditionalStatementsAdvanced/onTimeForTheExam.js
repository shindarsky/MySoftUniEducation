function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivingHour = Number(input[2]);
    let arrivingMinute = Number(input[3]);

    let examTime = 0;
    let arrivingTime = 0;
    let Hours = 0;
    let Minutes = 0;

    examTime = examHour * 60 + examMinute;
    arrivingTime = arrivingHour * 60 + arrivingMinute;

    let diff = examTime - arrivingTime;

    if (diff <= 30 && diff > 0) {
        console.log("On time");
        console.log(`${diff} minutes before the start`)
    } else if (diff == 0) {
        console.log("On time");
    } else if (diff > 30) {
        console.log("Early");
        if (diff >= 60) {
            Hours = Math.trunc(diff / 60);
            Minutes = diff - Hours * 60;
            if (Minutes >= 0 && Minutes < 10) {
                console.log(`${Hours}:0${Minutes} hours before the start`);
            } else {
                console.log(`${Hours}:${Minutes} hours before the start`);
            }

        } else {
            Minutes = diff - Hours * 60;
            console.log(`${Minutes} minutes before the start`);
        }
    } else {
        console.log("Late");
        let timeDifferenceAbs = Math.abs(diff);
        if (timeDifferenceAbs >= 60) {
            Hours = Math.trunc(timeDifferenceAbs / 60);
            Minutes = timeDifferenceAbs - Hours * 60;
            if (Minutes >= 0 && Minutes < 10) {
                console.log(`${Hours}:0${Minutes} hours after the start`); 
            } else {
                console.log(`${Hours}:${Minutes} hours after the start`);
            }
        } else {
            Minutes = timeDifferenceAbs - Hours * 60;
            console.log(`${Minutes} minutes after the start`);
        }
    }

}

//onTimeForTheExam(["9", "00", "10", "30"])


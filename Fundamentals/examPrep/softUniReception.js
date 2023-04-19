function softUniReception(input) {
    let employeeOne = Number(input[0]);
    let employeeTwo = Number(input[1]);
    let employeeThree = Number(input[2]);
    let students = Number(input[3]);
    let time = 0;

    let answerPerHourAll = employeeOne + employeeTwo + employeeThree;
    while (students > 0) {
        students -= answerPerHourAll;
        time++;
        if (time > 0 && time % 4 == 0) {
            time++;
        }

    }
    console.log(`Time needed: ${time}h.`);
}

softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);

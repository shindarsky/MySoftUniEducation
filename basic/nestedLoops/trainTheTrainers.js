function trainTheTrainers(input){
    let judgesCount = Number(input[0]);
    let totalGradeSum = 0;
    let totalPresentationCount = 0;

    let i = 1;
    let currentPresentation = input[i];
    i++;

    while (currentPresentation != "Finish"){
        totalPresentationCount++;

        let presentationGrade = 0;
        for (let j = 0; j < judgesCount; j++){
            let currentGrade = Number(input[i]);
            i++;

            presentationGrade += currentGrade;
            totalGradeSum += currentGrade;
        }

        console.log(`${currentPresentation} - ${(presentationGrade / judgesCount).toFixed(2)}.`);

        currentPresentation = input[i];
        i++;
    }

    console.log(`Student's final assessment is ${(totalGradeSum / (totalPresentationCount * judgesCount)).toFixed(2)}.`);
}

trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);

function examPreparation(input){
    let badGradesLimit = Number(input[0]);
    let badGradesCurrent = 0;
    let totalTasks = 0;
    let sumTasks = 0;
    let lastProblemName = '';

    let i = 1;
    while(true){
        let taskName = input[i];
        i++;
        let taskGrade = Number(input[i]);
        i++;

        if(taskName == "Enough"){
            console.log(`Average score: ${(sumTasks / totalTasks).toFixed(2)}`);
            console.log(`Number of problems: ${totalTasks}`);
            console.log(`Last problem: ${lastProblemName}`);
            break;
        }

        totalTasks++;
        sumTasks += taskGrade;
        lastProblemName = taskName;

        if (taskGrade <= 4){
            badGradesCurrent++;
            if (badGradesCurrent == badGradesLimit){
                console.log(`You need a break, ${badGradesLimit} poor grades.`);
                break;
            }
        }

    }

}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])


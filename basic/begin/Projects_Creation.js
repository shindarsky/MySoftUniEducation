function projectsCreation(input){
    let name = input[0];
    let projectsCount = Number(input[1]);
    let hourPerProject = 3;
    let totalHours = projectsCount * hourPerProject;

    console.log("The architect " + name + " will need " + totalHours +" hours to complete " + projectsCount + " project/s.");
}

//projectsCreation(["Ivo", "5"])
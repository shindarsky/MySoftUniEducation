function concatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let years = input[2];
    let town = input[3];

    console.log("You are " + firstName + " " + lastName +", a " + years +"-years old person from " + town +".");
    
    //"You are <firstName> <lastName>, a <age>-years old person from <town>."
}

concatenateData(['Ivo', 'Shindarski', 40, 'Sofia'])
concatenateData(['Elitsa', 'Shindarska', 13, 'Sofia'])
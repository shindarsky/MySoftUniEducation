function coordinatesXY(input){

    let x = Number(input[0]);
    let y = Number(input[1]);

    if ((x == 0) || (y == 0)){
        console.log("Точка върху осите!");
    }
    if ((x > 0) && (y > 0) ){
        console.log("Точка в квадрант I");            
    }

    if ((x < 0) && (y < 0)){
        console.log("Точка в квадрант III");
    }

    if ((x < 0) && (y > 0)){
        console.log("Точка в квадрант II");
    }

    if ((x > 0) && (y < 0)){
        console.log("Точка в квадрант IV");
    }

    
}

coordinatesXY(["2","2"]);
coordinatesXY(["2","-2"]);
coordinatesXY(["-2","2"]);
coordinatesXY(["-2","-2"]);
coordinatesXY(["0","2"]);
coordinatesXY(["2","0"]);
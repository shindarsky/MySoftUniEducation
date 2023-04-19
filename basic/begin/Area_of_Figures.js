function areaOfFigures(input){
    let shape = input[0];
    let area = 0;
    
    if (shape === "square"){
        let side = Number(input[1]);
        area = side * side;
    } else if (shape === "rectangle"){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB;
    } else if (shape === "circle"){
        let radius = Number(input[1]);
        area = radius * radius * Math.PI;
    } else if(shape === "triangle"){
        let sideT = Number(input[1]);
        let heightT = Number(input[2]);
        area = sideT * heightT / 2;
    }

    console.log(area.toFixed(3));
}

//areaOfFigures(["circle","6"])

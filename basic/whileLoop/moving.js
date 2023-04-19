function moving(input){
    let spaceWidth = Number(input[0]);
    let spaceLength = Number(input[1]);
    let spaceHeigth = Number(input[2]);

    let freeSpace = spaceWidth * spaceLength * spaceHeigth;

    i=3;
    while (true){
        if(input[i] == "Done"){
            console.log(`${freeSpace} Cubic meters left.`);
            break;
        }
        freeSpace -= input[i];
        i++;
        if (freeSpace < 0 ){
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
            break;
        }
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])


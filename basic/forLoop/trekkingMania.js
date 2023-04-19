function trekkingMania(input){
    let groupsNumber = Number(input[0]);
    let totalCount = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groupsNumber; i++){
        totalCount += Number(input[i]);
        let group = Number(input[i])
        if (group <= 5){
            musala += group;
        } else if (group <= 12){
            monblan += group;
        } else if (group <= 25){
            kilimandjaro += group;
        } else if (group <= 40){
            k2 += group;
        } else {
            everest += group;
        }   
    }

    console.log(`${(musala / totalCount * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalCount * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / totalCount * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalCount * 100).toFixed(2)}%`);
    console.log(`${(everest / totalCount * 100).toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])


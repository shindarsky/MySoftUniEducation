function loading(num) {

    let absNum = calculateAbsPercentage(num);
    let buffAndDots = concatPecenteges(absNum);
    printPercentageBar(num, buffAndDots);

    function calculateAbsPercentage(num) {
        return num / 10;
    }

    function concatPecenteges(absNum) {
        let buff = ""
        let dots = ""

        for(let i = 0; i < absNum; i++) {
            buff += "%"
        }
        for(let i = 0; i < 10 - absNum; i++) {
            dots += "."
        }
        return [buff, dots];
    }

    function printPercentageBar(num, [buff, dots]) {

        switch(num) {
            case 100: 
                console.log("100% Complete!");
                console.log(`[${buff}${dots}]`);
                break;
            default: 
                console.log(`${num}% [${buff}${dots}]`);
                console.log("Still loading...");
        }
    }
} 

loading(30);
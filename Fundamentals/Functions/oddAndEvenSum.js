function oddAndEvenSum(num) {
    let sumOdd = 0;
    let sumEven = 0;
    let numAsString = String(num);

    sumOddAndEven(numAsString);
    printOut();

    function sumOddAndEven(){
        for (let i = 0; i < numAsString.length; i++) {
            if (Number(numAsString.charAt(i)) % 2 == 0) {
                sumEven += Number(numAsString.charAt(i));
            } else {
                sumOdd += Number(numAsString.charAt(i));
            }
        }
        
    }

    function printOut(){
        console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
    }    

}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
function uniquePINCodes(input) {
    let firstNumMax = Number(input[0]);
    let secondNumMax = Number(input[1]);
    let thirdNumMax = Number(input[2]);

    for (i = 1; i <= firstNumMax; i++) {

        for (j = 2; j <= secondNumMax; j++) {

            for (k = 1; k <= thirdNumMax; k++) {
                if (i % 2 == 0 && j % secondNumMax-1 != 0 && k % 2 == 0) {
                    console.log(i + " " + j + " " + k);
                }
            }
        }
    }
}


uniquePINCodes(["3",
    "5",
    "5"])

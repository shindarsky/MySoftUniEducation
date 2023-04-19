function uniquePINCodes(input) {
    let firstNumMax = Number(input[0]);
    let secondNumMax = Number(input[1]);
    let thirdNumMax = Number(input[2]);

    for (i = 1; i <= firstNumMax; i++) {

        for (j = 1; j <= secondNumMax; j++) {

            for (k = 1; k <= thirdNumMax; k++) {
                if (i % 2 == 0 && k % 2 == 0 &&
                     (j >= 2 && j != 4 && j != 6 && j <= 7)) {
                    console.log(i + " " + j + " " + k);
                }
            }
        }
    }
}


uniquePINCodes(["8",
"2",
"8"])


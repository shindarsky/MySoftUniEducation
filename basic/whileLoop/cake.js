function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);

    let cakePieces = cakeWidth * cakeLength;

    let i = 2;
    while (true) {
        if (input[i] == "STOP") {
            console.log(`${cakePieces} pieces are left.`);
            break;
        }
        cakePieces -= input[i];
        i++;
        if (cakePieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
            break;
        }
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])



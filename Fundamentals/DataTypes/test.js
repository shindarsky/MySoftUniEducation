function triplesOfLatinLetters(num) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
 
                let char1 = String.fromCharCode('a'.charCodeAt(0) + i);
                let char2 = String.fromCharCode('a'.charCodeAt(0) + j);
                let char3 = String.fromCharCode('a'.charCodeAt(0) + k);
                console.log(`${char1}${char2}${char3}`);
            }
        }
    }
}

triplesOfLatinLetters(3);
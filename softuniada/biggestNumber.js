function combineNumbers(numbers) {
    let strings = [];
    for(let i = 0; i< numbers.length; i++){
        strings[i] = numbers.slice(" ");
    }
   
    strings.sort((a, b) => {
        return (b + a) - (a + b);
    });

    
    console.log(strings.join(''));
}

combineNumbers(['3 30 34 5 9']);
// combineNumbers([1, 3, 4, 5, 3, 2]);
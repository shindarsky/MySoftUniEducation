function solve(text, charToChange, newText){
    let newString = '';
    for (let i = 0; i < text.length; i++) {
        if(text[i] === '_') {
            newString += charToChange;
        } else {
            newString += text[i];
        }
        
    }

    console.log(newString === newText ? 'Matched' : 'Not Matched');
}

// solve('Str_ng', 'I', 'Strong');
// solve('Str_ng', 'i', 'String');
function pascalCaseSplitter(text) {
    let result = [];
    let start = 0;
    for (let i = 1; i < text.length; i++) {
        let ch = text[i];
        if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
            result.push(text.substring(start, i));
            start = i;
        }
    }
    result.push(text.substring(start));
    console.log(result.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
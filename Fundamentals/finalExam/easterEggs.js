function easterEggs(text) {
    let regex = /[@#]+([a-z]{3,})[^a-z0-9]*\/(\d+)\/+/gm;
    let match;
    while ((match = regex.exec(text)) !== null) {
        console.log(`You found ${match[2]} ${match[1]} eggs!`);
    }
}
  

easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);

console.log("-----------------------------------------");

easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);
function loadingBar(num) {
    if (num === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        let buff = "";
        for (let i = 0; i < num; i += 10){
            buff += "%"; 
        }
        for (let j = num; j < 100; j += 10){
            buff += ".";
        }
        console.log(`${num}% [${buff}]`);
        console.log("Still loading...");
    }
}

loadingBar(100);
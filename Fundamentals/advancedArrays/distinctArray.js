function distinctArray(input) {
    let uniqArr = [];
    for (let el of input) {
        if (uniqArr.indexOf(el) === -1) {
            uniqArr.push(el)
        }
    }
    console.log(uniqArr.join(" "));
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
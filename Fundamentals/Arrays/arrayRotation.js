function arrayRotation(arr, rotations) {
    let buffArr = [];
    for (let i = 0; i < rotations; i++) {
        let currElement = arr[0];
        for (let j = 1; j < arr.length; j++) {
            buffArr.push(arr[j]);
        }
        buffArr.push(currElement);
        arr = buffArr;
        buffArr= [];
    }
    console.log(arr.join(" "));
}

// arrayRotation([2, 4, 15, 31], 5);
function addAndSubtract(arr){
    let newArr = [];
    let sumOriginal = 0;
    let sumNew = 0;
    for (let i = 0; i < arr.length; i++){
        sumOriginal += arr[i];
        if (arr[i] % 2 === 0){
            newArr[i] = arr[i] + i;
        } else {
            newArr[i] = arr[i] - i;
        }
        sumNew += newArr[i];
    }
    console.log(newArr);
    console.log(sumOriginal);
    console.log(sumNew);
}

// addAndSubtract([-5, 11, 3, 0, 2]);
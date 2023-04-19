function equalSums(array) {
    let sumLeft;
    let sumRigth;
    if (array.length != 1) {
        for (let i = 0; i < array.length; i++) {
            sumLeft = 0;
            sumRigth = 0;
            let flag = false;
            for (let j = 0; j < array.length; j++) {
                const element = array[j];
                if (i == j) {
                    flag = true;
                    continue;
                }
                if (flag == false) {
                    sumLeft += element;
                } else {
                    sumRigth += element;
                }
            }
            if (sumLeft == sumRigth) {
                console.log(i);
                break;
            }
        }
        if (sumLeft != sumRigth) {
            console.log("no");
        }
    } else {
        console.log(0);
    }
}

equalSums([1,2]);
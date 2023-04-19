function commonElements(arr1, arr2) {
    for (const element of arr1) {
        for (const element2 of arr2) {
            if (element === element2) {
                console.log(element);
            }
        }
    }
}

// commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
// ['s', 'o', 'c', 'i', 'a', 'l']);
function NxNMatrix(num){
    
    creationOfMatrix(num);

    function creationOfMatrix(num){
        let buff = "";
        for(let i = 0; i < num; i++){
            for (let j = 0 ; j < num; j ++){
                buff += num + " ";
                
            }
            printMatrix(buff);
            buff = "";
        }
    }

    function printMatrix(buff){
        console.log(buff);
    }
    
}

// NxNMatrix(7);
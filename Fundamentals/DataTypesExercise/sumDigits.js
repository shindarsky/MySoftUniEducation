function solve(num){
    let sum = 0;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    console.log(sum);    
}

        
solve(245678);
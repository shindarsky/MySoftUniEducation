function echo(param){
    let paramType = typeof param;
    console.log(paramType);
    if (paramType == 'string' || paramType == 'number'){
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

// echo('Hello, JavaScript!');
// echo(18);
// echo(null);

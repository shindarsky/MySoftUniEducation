function employees(data){
    let obj = {};
    for (let name of data){
        obj[name] = name.length;
    }
    
    for (let key of Object.keys(obj)){
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }
}

employees([ 
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])

function employees2(data){
    let res = [];
    for (let name of data){
        let myInfo = {
            name: name,
            personalNumber: name.length
        }
        res.push(myInfo);
    }

    for (let obj of res){
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
    }
}    
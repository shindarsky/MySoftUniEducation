function salary(input){
    let facebook = 150;    
    let instagram = 100;  
    let reddit = 50; 

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (i = 0; i < openTabs; i++){
        let tabName = input[i + 2];
        if (tabName == "Facebook"){
            salary -= facebook;
        } else if (tabName == "Instagram"){
            salary -= instagram;
        } else if (tabName == "Reddit"){
            salary -= reddit;
        }
    }

    if (salary <= 0){
        console.log('You have lost your salary.');
    } else {
        console.log(salary);
    }   
}

salary(["3",
"500",
"Facebook",
"Reddit",
"Instagram"])



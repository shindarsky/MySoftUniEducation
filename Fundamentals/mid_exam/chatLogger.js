function chatLogger(input) {
    let myArray = [];

    for (const line of input) {
        if (line === "end") {
            console.log(myArray.join("\n"));
        }
        let message = line.split(" ");
        let command = message.shift();

        switch (command) {
            case "Chat":
                myArray.push(message);
                break;
            case "Delete":
               
                break;
            case "Edit":

                break;
            case "Pin":
              
                break;
            case "Spam":

                break;
        }
    }

}

// chatLogger((["Chat Hello",
//     "Chat darling",
//     "Edit darling Darling",
//     "Spam how are you",
//     "Delete Darling",
//     "end"])
// )

chatLogger(["Chat Hello",
"Delete John",
"Pin Hi",
"end"])

function ladybugs(field_size, initial_positions, commands) {
    // let field_size = Number(readLine().trim());
    // let initial_positions = readLine().trim().split(" ").map(Number);
    // let n = Number(readLine().trim());
    // let commands = [];
    // for (let i = 0; i < n; i++) {
    // commands.push(readLine().trim());
    // }
    
    let field = Array(field_size).fill(0);
    initial_positions.forEach(i => {
        if (i >= 0 && i < field_size) {
            field[i] = 1;
        }
    });
    commands.forEach(command => {
        let parts = command.split(" ");
        let index = Number(parts[0]);
        let direction = parts[1];
        let fly_length = Number(parts[2]);
        if (index >= 0 && index < field_size && field[index] == 1) {
            field[index] = 0;
            while (true) {
                index = direction == "right" ? index + fly_length : index - fly_length;
                if (index >= 0 && index < field_size) {
                    if (field[index] == 0) {
                        field[index] = 1;
                        break;
                    }
                } else {
                    break;
                }
            }
        }
    });
    console.log(field.join(" "));
}

ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]
);
function stringManipulator(data) {
	let string = data.shift();

	let commandParser = {
		Translate(string, char, replacement) {
			while (string.includes(char)) {
				string = string.replace(char, replacement);
			}
			console.log(string);
			return string;
		},
		Includes(string, substring) {
			console.log(string.includes(substring) ? "True" : "False");
			return string;
		},
		Start(string, substring) {
			console.log(string.startsWith(substring) ? "True" : "False");
			return string;
		},
		Lowercase(string) {
			string = string.toLowerCase();
			console.log(string);
			return string;
		},
		FindIndex(string, char) {
			console.log(string.lastIndexOf(char));
			return string;
		},
		Remove(string, start, count) {
			start = Number(start);
			count = Number(count);
			let first = string.substring(0, start);
			let second = string.substring(start + count);
			string = first + second;
			console.log(string);
			return string;
		},
	};

	for (const line of data) {
		if (line === "End") {
			break;
		}
		let [command, ...tokens] = line.split(" ");
		string = commandParser[command](string, ...tokens);
	}
}

stringManipulator([
	"//Thi5 I5 MY 5trING!//",
	"Translate 5 s",
	"Includes string",
	"Start //This",
	"Lowercase",
	"FindIndex i",
	"Remove 0 10",
	"End",
]);

// stringManipulator([
// 	"*S0ftUni is the B3St Plac3**",
// 	"Translate 2 o",
// 	"Includes best",
// 	"Start the",
// 	"Lowercase",
// 	"FindIndex p",
// 	"Remove 2 7",
// 	"End",
// ]);
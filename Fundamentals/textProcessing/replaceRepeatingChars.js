function replaceRepeatingChars(string) {
	let newStr = '';
	for (let i = 0; i < string.length; i++) {
		let curChar = string[i];
		let nextChar = string[i + 1];

		if (curChar !== nextChar) {
			newStr += curChar;
		}
	}
	console.log(newStr);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
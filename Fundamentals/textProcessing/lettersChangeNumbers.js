function lettersChangeNumbers(string) {
	let arrOfString = getSplittedString(string);
	getAlphaBet(arrOfString);

	let result = getTotal(arrOfString);
	console.log(result.toFixed(2));

	function getTotal(stringAndNums) {
		let total = 0;
		for (const el of arrOfString) {
			let charBefore = el.substring(0, 1)
			let charAfter = el.substring(el.length - 1, el.length);
			let num = Number(el.substring(1, el.length - 1));
			let currentResult = 0;
			let operandFromCharBefore = alphabet[charBefore.toLowerCase()];
			let operandFromCharAfter = alphabet[charAfter.toLowerCase()];
			charBefore.charCodeAt(0) >= 65 && charBefore.charCodeAt(0) <= 90 ?
				currentResult = num / operandFromCharBefore :
				currentResult = num * operandFromCharBefore
			charAfter.charCodeAt(0) >= 65 && charAfter.charCodeAt(0) <= 90 ?
				currentResult -= operandFromCharAfter :
				currentResult += operandFromCharAfter
			total += currentResult;
		}
		return total;
	}
    
	function getAlphaBet() {
		return alphabet = {
			a: 1,
			b: 2,
			c: 3,
			d: 4,
			e: 5,
			f: 6,
			g: 7,
			h: 8,
			i: 9,
			j: 10,
			k: 11,
			l: 12,
			m: 13,
			n: 14,
			o: 15,
			p: 16,
			q: 17,
			r: 18,
			s: 19,
			t: 20,
			u: 21,
			v: 22,
			w: 23,
			x: 24,
			y: 25,
			z: 26
		}
	}

	function getSplittedString(stringToSplit) {
		for (let i = 0; i < string.length; i++) {
			let currentChar = string[i];
			let nextChar = string[i + 1];
			string = string.trimStart().trimEnd()
			if (currentChar === ' ' && nextChar === ' ') {
				string = string.replace('  ', ' ');
				i -= 1;
			} else if (currentChar === '\t') {
				string = string.replace('\t', ' ');
				i -= 1;
			}
		}
		return string.split(' ')
	}
}

lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');
function countLongestValidAdjacentParentheses(input) {
    let string1 = String(input);
    let maxLen = 0;

    for (let i = 0; i < string1.length; i = i+2) {
        if (string1.charAt(i) === '(' && string1.charAt(i+1) === ')') {
            maxLen +=2;
        }
    }

    console.log(maxLen);
}

// findLongestSequence('(()');
// findLongestSequence(')()())');
countLongestValidAdjacentParentheses('()(()()(()');
// findLongestSequence('()()()(');
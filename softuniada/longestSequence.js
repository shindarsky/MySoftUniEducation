function countLongestValidAdjacentParentheses(input) {
    let str = String(input);
    let longestSeq = 0;
    let currentSeq = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' && i < str.length - 1 && str[i + 1] === ')') {
            currentSeq++;
        } else {
            longestSeq = Math.max(longestSeq, currentSeq);
            currentSeq = 0;
        }
    }

    longestSeq = Math.max(longestSeq, currentSeq);

    return longestSeq;
}

console.log( countLongestValidAdjacentParentheses('(()'));
console.log( countLongestValidAdjacentParentheses(')()())'));
console.log( countLongestValidAdjacentParentheses('()(()()(()'));
console.log( countLongestValidAdjacentParentheses('()()()('));
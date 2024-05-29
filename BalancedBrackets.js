function BalancedBracket(s) {
  const stack = [];
  const brackets = { "(": ")", "[": "]", "{": "}" };

  for (let char of s) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (brackets[lastBracket] !== char) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(BalancedBracket("{[()]}"));
console.log(BalancedBracket("{[(])}"));
console.log(BalancedBracket("{(([])[])[]}"));

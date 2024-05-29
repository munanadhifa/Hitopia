function weightedStrings(s, queries) {
  const weights = new Set();
  let weight = 0;
  let prevChar = "";

  for (let char of s) {
    if (char !== prevChar) {
      weight = 0;
    }
    weight += char.charCodeAt(0) - 96;
    weights.add(weight);
    prevChar = char;
  }

  return queries.map((query) => (weights.has(query) ? "Yes" : "No"));
}

let s = "abbcccd";
let queries = [1, 3, 9, 8];
console.log(weightedStrings(s, queries));

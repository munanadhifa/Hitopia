function Palindrome(s, start, end) {
  if (start >= end) return true;
  if (s[start] !== s[end]) return false;
  return Palindrome(s, start + 1, end - 1);
}

function HighestPalindrome(s, k, start = 0, end = s.length - 1) {
  if (k < 0) return -1;
  if (start >= end) return s;

  const first = s[start];
  const last = s[end];

  if (first !== last) {
    const firstCase = HighestPalindrome(s, k - 1, start, end - 1);
    const lastCase = HighestPalindrome(s, k - 1, start + 1, end);
    if (firstCase === -1 && lastCase === -1) return -1;
    else if (firstCase === -1) return lastCase;
    else if (lastCase === -1) return firstCase;

    return firstCase > lastCase ? firstCase : lastCase;
  } else {
    const middle = HighestPalindrome(s, k, start + 1, end - 1);
    if (middle === -1) return -1;
    return first + middle + last;
  }
}

console.log(HighestPalindrome("3943", 1));

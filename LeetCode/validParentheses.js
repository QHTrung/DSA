// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/*
 * @param {string} s
 * @return {boolean}
 */
const s = '()[]{}';
const isValid = function (s) {
  let stack = [];
  const mapping = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  // loop string s
  for (let i = 0; i < s.length; i++) {
    if (Object.values(mapping).includes(s[i])) {
      // if character is opening parenthesis
      stack.push(s[i]); // push it to stack
    } else if (mapping.hasOwnProperty(s[i])) {
      // character is closing parenthesis
      if (!stack.length || mapping[s[i]] !== stack.pop()) {
        // Check empty stack or if the two parentheses(current parenthesis and the latest parenthesis in Stack) are not valid combination, we should return False
        return false;
      }
    }
  }
  return stack.length === 0; // At last, if Stack is empty, we should return True.
};
console.log(isValid(s));

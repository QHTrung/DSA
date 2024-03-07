// Write a function to classify student
// Receive mark as a number, output as below:
// mark > 8 --> 'Excellence'
// 7 <= mark <= 8 --> 'Good'
// 4 <= mark <= 6 --> 'Not Good'
// mark < 4 --> 'Bad'

function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark!';
  else if (mark > 8) return 'Excellence';
  else if (mark >= 7) return 'Good';
  else if (mark >= 4) return 'Not Good';
  return 'Bad';
}
console.log(classifyStudent(-1));
console.log(classifyStudent(0));
console.log(classifyStudent(3));
console.log(classifyStudent(4));
console.log(classifyStudent(5));
console.log(classifyStudent(7.5));
console.log(classifyStudent(8));
console.log(classifyStudent(9));
console.log(classifyStudent(10));
console.log(classifyStudent(12));

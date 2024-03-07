// A list of error codes from server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and return the according message

function getErrorV1(errorCode) {
  let mess = '';
  switch (errorCode) {
    case 'E01':
      mess = 'Invalid username or password';
      break;
    case 'E02':
      mess = 'Too many attempts';
      break;
    case 'E03':
      mess = 'Missing data';
      break;
    default:
      mess = 'Something went wrong';
  }
  return mess;
}
function getErrorV2(errorCode) {
  const errObj = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };
  return errObj[errorCode] || 'Something went wrong';
}
console.log(getErrorV2('E01'));
console.log(getErrorV2('E02'));
console.log(getErrorV2('E03'));
console.log(getErrorV2('E04'));

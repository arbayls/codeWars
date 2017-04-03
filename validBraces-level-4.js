//Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.
// Examples:
// validBraces( "(){}[]" ) => returns true
// validBraces( "(}" ) => returns false
// validBraces( "[(])" ) => returns false
// validBraces( "([{}])" ) => returns true
// validBraces( "([)]" ) => returns false

function validBraces (braces) {
  var validBracesObj = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  var leftBraces = [];
  var bracesArr = braces.split('');
  for (var i = 0; i < bracesArr.length; i++) {
    var brace = bracesArr[i];
    if (validBracesObj[brace]) {
      leftBraces.push(brace);
    } else if (brace === validBracesObj[leftBraces[leftBraces.length - 1]]) {
      leftBraces.pop();
    } else if (!validBracesObj[brace] && leftBraces.length === 0) {
      return false;
    } else if (brace !== validBracesObj[leftBraces[leftBraces.length - 1]]) {
      return false;
    }
  }
  return (leftBraces.length === 0);
}
console.log(validBraces('({}[])'));

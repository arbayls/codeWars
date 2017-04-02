//Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.
// Examples:
// validBraces( "(){}[]" ) => returns true
// validBraces( "(}" ) => returns false
// validBraces( "[(])" ) => returns false
// validBraces( "([{}])" ) => returns true

function validBraces(braces) {
  if (braces.indexOf("(" > 0 && braces.indexOf(")" > 0))) {
    return true;
}

validBraces('(){}[]');

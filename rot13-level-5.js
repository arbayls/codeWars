//Rotate letters by 13 alphabetic characters.

//make string array
//check to see if each character is a letter
//if letter, rotate by 13 alphabetic charachters.
//if it's not a letter, do nothing.

function rot13(str) {
    if (str.length < 1) return '';
    var characters = str.split('');
    var alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return characters.map(function(char) {
        if (/[a-z]/ig.test(char) || /[A-Z]/ig.test(char)) {
            return /[A-Z]/.test(char) === true ? rotator(alphabetArr, char.toLowerCase()).toUpperCase() : rotator(alphabetArr, char.toLowerCase());
        }
        return char;
    }).join('');
}
//Find the equivalent letter in the alphabet.
function rotator(alphabetArr, char) {
    var idx = alphabetArr.indexOf(char);
    return (alphabetArr[(idx + 13) % alphabetArr.length]);
}
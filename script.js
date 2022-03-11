
//Create four different character arrays from which password characters can be selected

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Use window.prompt method to prompt user to indicate how many characters user wants the password to have.

var passwordLength = window.prompt("Please choose a number between 8 and 128 inclusive, to indicate how many characters you would like in your password:");

// Would like to include code to address what happens if user inputs incorrect number for length of password
  // if (passwordLength < 8 || passwordLength > 128) {
  //   requestPasswordLengthAgain = window.confirm("Oops! Your password length is outside the parameters. Would you like to try set your password length again?")
  // }

  // if (requestPasswordLengthAgain) {
  //   var passwordLength 
  // }

// Use window.confirm method to ask user about preferred character types in the password.

var charTypeUpper = window.confirm("Do you want your password to include Upper Case letters?");
var charTypeLower = window.confirm("Do you want your password to include lower case letters?");
var charTypeNumbers = window.confirm("Do you want your password to include numbers?");
var charTypeSpecial = window.confirm("Do you want your password to include special characters?");

// Use if and if else statements to construct different possible character arrays based on user's responses to questions about character preferences.

  if (charTypeLower && charTypeUpper && charTypeNumbers && charTypeSpecial) {
    var passwordCharacterArray = alphaUpper.concat(alphaLower, numbers, specialChars);

    } else if (!charTypeUpper && charTypeLower && charTypeNumbers && charTypeSpecial) {
      var passwordCharacterArray = alphaLower.concat(numbers, specialChars);

    } else if (!charTypeUpper && !charTypeLower && charTypeNumbers && charTypeSpecial) {
      var passwordCharacterArray = numbers.concat(specialChars);

    } else if (!charTypeUpper && !charTypeLower && !charTypeNumbers && charTypeSpecial) {
      var passwordCharacterArray = specialChars;

    } else if (charTypeUpper && !charTypeLower && charTypeNumbers && charTypeSpecial) {
      var passwordCharacterArray = alphaUpper.concat(numbers, specialChars);

    } else if (charTypeUpper && !charTypeLower && !charTypeNumbers && charTypeSpecial) {
      var passwordCharacterArray = alphaUpper.concat(specialChars);

    } else if (charTypeUpper && !charTypeLower && !charTypeNumbers && !charTypeSpecial) {
      var passwordCharacterArray = alphaUpper;

    } else if (charTypeUpper && charTypeLower && !charTypeNumbers && !charTypeSpecial) {
      var passwordCharacterArray = alphaUpper.concat(alphaLower);

    } else if (!charTypeUpper && !charTypeLower && charTypeNumbers && charTypeSpecial) {
      var passwordCharacterArray = alphaLower.concat(numbers, specialChars);

    } else if (!charTypeUpper && charTypeLower && !charTypeNumbers && charTypeSpecial) {
      var passwordCharacterArray = alphaLower.concat(specialChars);

    } else if (!charTypeUpper && charTypeLower && !charTypeNumbers && !charTypeSpecial) {
      var passwordCharacterArray = alphaLower;
    
    } else if (charTypeUpper && charTypeLower && !charTypeNumbers && charTypeSpecial) {
      var passwordCharacterArray = alphaUpper.concat(alphaLower, specialChars);
    };

// Would like to include code here to address what happens if user answers "cancel" to all window.confirm questions about character types

// initialize a preliminary password array, i.e., and a password array that still has characters separated by quotations and commas, and initialize it as an empty array.

var prelimPassword = [];

// Create function to generate a password, and to return a password.

function generatePassword() {

  // use for loop and Math.floor and Math.random methods to iterate through password character string and select characters at randome, for as many times as there are characters in the array.

  for (var i = 0; i < passwordLength; i++) {
    prelimPassword.push(passwordCharacterArray[Math.floor(Math.random() * passwordCharacterArray.length)])};
   
  // once the for loop has constructed a new password array, use the .join method to strip away the quotation marks and commas that separate the characters in that array.

  var password = prelimPassword.join("");
  
  // "return password" means that this function will return, or produce a password with a value determined by the function, whenever the function is called.
  return password;

};


// Included console.log command to print password to console to check for bugs, etc.

console.log(password);

// The remainder of this script was provided by UWBootcamp

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

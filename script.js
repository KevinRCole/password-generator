
// begin function to generate password here, and encompus all the relevant javascript variables.

var generatePassword = function() {

  // assign values to ariables that will be used later in the function

  var passwordLength = 0;
  var prelimPassword = [];
  
  //Create four different character arrays from which password characters can be selected

  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  // Use window.prompt method to prompt user to indicate how many characters user wants the password to have.

  passwordLength = window.prompt("Please enter a number greater than or equal to 8, and less than or equal to 128, to indicate how many characters you want in your password:");

    // the .prompt method returns a string type of variable passwordLength, so use parseInt to convert that string type to a number type    
  
    passwordLength = parseInt(passwordLength);
    
    // use an if statement to check to see whether user chose a password length that is within the required parameters.  If user failed to do this, then alert user and start over.
    
    if (!(passwordLength >= 8) || !(passwordLength <= 128)) {
    
      alert("Please re-enter a password length that is between 8 and 128 inclusive.");
      return generatePassword();
    };

  // Use window.confirm method to ask user about preferred character types in the password.

  var charTypeUpper = window.confirm("Do you want your password to include Upper Case letters?");
  var charTypeLower = window.confirm("Do you want your password to include lower case letters?");
  var charTypeNumbers = window.confirm("Do you want your password to include numbers?");
  var charTypeSpecial = window.confirm("Do you want your password to include special characters?");


  // if statement to detect i user rejected all of the proposed character types, then inform user with an "alert" methond that user needs to start over, and return and recall generatePassword().

  if (!charTypeUpper && !charTypeLower && !charTypeNumbers && !charTypeSpecial) {
    alert("You must select the type of character or characters you want to use in you password.  Please try again from the beginning.");
    return generatePassword();
  }

// If user selects at least one character type, then use if and if else statements to construct different possible character arrays based on user's responses to questions about character preferences.

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


  // use for loop and Math.floor and Math.random methods to iterate through password character string and select characters at randome, for as many times as there are characters in the array.

  for (var i = 0; i < passwordLength; i++) {
    prelimPassword.push(passwordCharacterArray[Math.floor(Math.random() * passwordCharacterArray.length)])};
   
  // after the for loop construct a new password array called "prelimPassword", use the .join method to strip away the quotation marks and commas that separate the characters in that array, and assign the resulting string to the "password" variable.

  var password = prelimPassword.join("");

  // "return password" means that this function will return a password with a value determined by the function, whenever the function is called.
 
  return password;

};

// The remaining part of the javascript was written by UW Bootcamp and provided to me as part of this homework assignment

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
};

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



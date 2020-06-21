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

  // Create Variable Arrays for Password Generator
  var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var newPassword = "";

  // Empty Arrays
  var resultArray = [];
  var userArray = [];
  

// Create Generate Password Function
function generatePassword() {
    var charLength = prompt("How many characters would you like your new password to be? Pick a number between 8 and 128.");
    console.log("Password Length " + charLength);

    if ((charLength < 8) || (charLength > 128)) {
        window.alert("Please pick a number between 8 and 128.");
        generatePassword();
    }
    else {
            // Prompt user to pick character types
            var genSymbols = window.confirm("Would you like to use special characters? i.e. (!, $, %, etc.)");
            console.log("Use symbols? " + genSymbols)

            var genNumbers = confirm("Would you like to use numbers?");
            console.log("Use numbers? " + genNumbers)

            var genLowerCase = confirm("Would you like to use numbers?");
            console.log("Use numbers? " + genLowerCase)

            var genUpperCase = confirm("Would you like to use numbers?");
            console.log("Use numbers? " + genUpperCase);
    };

    if (genSymbols) {
        resultArray = resultArray.concat(symbols);
    }

    if (genNumbers) {
        resultArray = resultArray.concat(numbers);
    }

    if (genLowerCase) {
        resultArray = resultArray.concat(lowerCase);
    }

    if (genUpperCase) {
        resultArray = resultArray.concat(upperCase);
    }
    console.log(resultArray)

    for (var i = 0; i < charLength; i++) {

        userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
        }

        return userArray.join("");
};

// Function Reset
function resetPassword() {
    document.getElementById("password").reset();
  }








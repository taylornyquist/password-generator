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

  // Create variables for password generator
  var symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newPassword = "";

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
        }


};

    




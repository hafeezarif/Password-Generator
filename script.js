//Console.log check (?Don't know if I should put this in here)
console.log("This is script.js");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("generatePassword initiated");

  //length
  var passwordLength = prompt(
    "Choose your password length by entering a number between 8 and 128."
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must select a number between 8 and 128. Try again.");
    console.log("Number does not meet criteria");
    return "Try again.";
  } else {
    console.log(passwordLength);
  }





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

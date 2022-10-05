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

  var characterTypes = [];

  //other prompts (AC)
  var lowerCase = confirm("Would you like to include lowercase characters?");
  if (lowerCase === true) {
    characterTypes.push(0);
  }
  console.log(lowerCase);

  var upperCase = confirm("Would you like to include uppercase characters?");
  if (upperCase === true) {
    characterTypes.push(1);
  }
  console.log(upperCase);

  var numbers = confirm("Would you like to include numbers?");
  if (numbers === true) {
    characterTypes.push(2);
  }
  console.log(numbers);

  var special = confirm("Would you like to include special characters?");
  if (special === true) {
    characterTypes.push(3);
  }
  console.log(special);

  console.log(characterTypes);

  var yourPassword = "";

  //random stuff
  for (var i = 0; i < passwordLength; ++i) {
    var randomCharacterType =
      characterTypes[Math.floor(Math.random() * characterTypes.length)];
    console.log(randomCharacterType);

    //functions for other prompts, i.e. lowercase, uppercase, special character
    if (randomCharacterType === 0) {
      console.log("Random lowercase");
      var randomCharacterCode = Math.floor(Math.random() * 25) + 97;
      console.log(randomCharacterCode);
      var asciiCode = String.fromCharCode(randomCharacterCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    } else if (randomCharacterType === 1) {
      console.log("Random uppercase");
      var randomCharacterCode = Math.floor(Math.random() * 25) + 65;
      console.log(randomCharacterCode);
      var asciiCode = String.fromCharCode(randomCharacterCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    } else if (randomCharacterType === 2) {
      console.log("Random number");
      var randomCharacterCode = Math.floor(Math.random() * 9) + 48;
      console.log(randomCharacterCode);
      var asciiCode = String.fromCharCode(randomCharacterCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    } else if (randomCharacterType === 3) {
      console.log("Random special character");
      var randomCharacterCode = Math.floor(Math.random() * 14) + 33;
      console.log(randomCharacterCode);
      var asciiCode = String.fromCharCode(randomCharacterCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    } else {
      alert("You must select a character type.");
      console.log("No character type selected");
    }
    console.log("Your password is " + yourPassword);
  }

  return yourPassword;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

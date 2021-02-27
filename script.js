var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
// var numChoice = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var lowerChoice = "abcdefghijklmnopqrstuvwxyz".split("")
// var upperChoice = "ABCDEFGHIJKLMNOPQRSTUVQXYZ".split("")
// console.log(upperChoice)
var passwordContinue;

var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", generatePassword);


function generatePassword() {
  var passwordLength = prompt("How many characters would you like in your password?");

if (passwordLength < 8) {
  alert("Password length must be more than 8 character");
  return;
}
        
  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  var minimumCount = 0;


  // Empty minimums

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  var functionArray = {
    getNumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function () {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

  };

  // Checks to make sure user selected okay 

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  document.getElementById("password").innerHTML = randomPasswordGenerated;
      console.log(randomPasswordGenerated)


}
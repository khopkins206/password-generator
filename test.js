
var specialCharacters = "!@#$%^&*()";
var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", generatePassword);

var password = false
var numChoice = false
var upperChoice = false
var lowerChoice = false
var charChoice = false

// function generatePassword() {
//   var passwordLength = prompt("How many characters would you like in your password?");

//   var numbers = confirm("Do you want numbers in your password?");

//   var lowerCases = confirm("Do you want lowercases in your password?");

//   var upperCases = confirm("Do you want uppercases in your password?");

//   var special = confirm("Do you want special characters in your password?");

//   var minimumCount;


  // Empty minimums

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";



  function startPW() {
    var password = ""
    var pwChoice = []

prompt("How many characters would you like in your password?")
    if (passwordLength >= 8 && passwordLength <= 128) {
      password == true
  }

    confirm("Do you want uppercases in your password?")
    if (upperCases === true)
      upperChoice == true
  
  };

  // Checks to make sure user selected okay 

  // if (passwordLength >= 8 && passwordLength <= 128) {
  //   getPasswordLength = functionArray.getPasswordLength();
  //   console.log(passwordLength)
  // }

  // if (numbers === true) {
  //   minimumNumbers = functionArray.getNumbers();
  //   minimumCount++;

  // }
  
  // if (lowerCases === true) {
  //   minimumLowerCases = functionArray.getLowerCases();
  //   minimumCount++;

  // }

  // if (upperCases === true) {
  //   minimumUpperCases = functionArray.getUpperCases();
  //   minimumCount++;

  // }

  // if (special === true) {
  //   minimumSpecialCharacters = functionArray.getSpecialCharacters();
  //   minimumCount++;

  } 

  // generate password

  

  var randomPasswordGenerated = "";


  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  var charCount = functionArray.getPasswordLength()

  for (let i = 0; i < (charCount - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
    console.log(randomPasswordGenerated)
  }


  document.getElementById("password").innerHTML = randomPasswordGenerated;
      console.log(randomPasswordGenerated)


}

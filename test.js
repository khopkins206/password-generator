var specialCharacters = "!@#$%^&*()";
var generateButton = document.querySelector("#generate");

generateButton.addEventListener("click", writePassword());
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"];
var numbers = [ ];
var capitalLetters = [ ];
var lowerCase = [ ];


var random1 = [specialCharacters, numbers,capitalLetters,lowerCase];
var random2 = [specialCharacters, numbers,capitalLetters];
var random3 = []
Etc etc...

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How many characters would you like in your password?");

  var numbers = confirm("Do you want numbers in your password?");
@@ -22,6 +27,23 @@ function generatePassword() {

  var special = confirm("Do you want special characters in your password?");


if(specialCharaters, numbers, capitalLetters, !lowerCase) {
   var randomValue = "";
   for(var i = 0; i < userInput.lenth; i++) {
       randomValue += special[Math.floor(Math.random() * random2.length)];
      }
} else if { !specialCharaters, numbers, capitalLetters, lowerCase) {
   var randomValue = "";
   for(var i = 0; i < userInput.lenth; i++) {
       randomValue += special[Math.floor(Math.random() * random2.length)];

} else if { specialCharaters, !numbers, capitalLetters, lowerCase) {
   var randomValue = "";
   for(var i = 0; i < userInput.lenth; i++) {
       randomValue += special[Math.floor(Math.random() * random2.length)];

        } else if{specialCharaters, numbers, !capitalLetters, lowerCase) {
   var randomValue = "";
   for(var i = 0; i < userInput.lenth; i++) {
       randomValue += special[Math.floor(Math.random() * random2.length)];
  
}


}

function generatePassword() {

  var minimumCount = 0;


@@ -97,3 +119,4 @@ function generatePassword() {
  return randomPasswordGenerated;

}
generateButton.addEventListener("click", writePassword());
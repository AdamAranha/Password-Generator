// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var charset = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChar = "!@#$&"

var passLowerChar
var passUpperChar
var passNum
var passSpecialTypes

var password


// Write password to the #password input
function writePassword() {
  console.log("btn pressed")
  criteria()
  setCharset()
  password = generatePassword();
  console.log("password generated")
  document.querySelector("#password").value = password
  console.log(specialChar[3])
}

function criteria() {
  // User confirms whether they want a strong a password between 8 and 128 characters
  passStrong = confirm("Do you want a passoword between 8 and 128 characters?");
  // User confirms whether they want their password to include lowercase letters
  passLowerChar = confirm("Do you want to include lower case letters")
  // User confirms whether they want their password to include uppercase letters
  passUpperChar = confirm("Do you want to include upper case letters?")
  // User confirms whether they want their password to include numbers
  passNum = confirm("Do you want to include numbers?")
  // User confirms whether they want their password to include special characters
  passSpecialTypes = confirm("Do you want to include special characters")

  // Sets password length depending on User choice
  passStrong ? passLength = randomNo(8, 128) : passLength = 8;
  console.log(passLength)
}

// Dictates what characters are used based on User choice in criteria()
function setCharset() {
  if (passUpperChar) { charset += upperCase }
  else if (passNum) { charset += numbers }
  else if (passSpecialTypes) { charset += specialChar }
}

// Generates the password depending on User choices in criteria()
function generatePassword() {
  var length = passLength

  var tempPass = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    tempPass += charset.charAt(Math.floor(Math.random() * n));
  }
  return tempPass;
}

// Creates random password length between 8 and 128 characters
function randomNo(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

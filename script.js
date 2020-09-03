// Assignment Code
// var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialArray = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?"];



var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function myFunction() {
  var txt;
  var length = prompt("How long do you want your password to be? it must be between 8 and 128 char");
  if (length == null || length == "") {
    alert("User cancelled the prompt.")
  } else {
    console.log(length)
    var lowerCase = confirm("Do you want to add lower case letters?");
    if (lowerCase == true) {
      var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }
    else {
      var lowerCaseArray = [];
    }
    console.log(lowerCaseArray)
    console.log(lowerCase)

    var upperCase = confirm("Do you want to add upper case letters?");
    if (upperCase == true) {
      var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }
    else {
      var upperCaseArray = [];
    }

    var numeric = confirm("Do you want to add numeric characters?");
    if (numeric == true) {
      var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }
    else {
      var numericArray = [];
    }

    var special = confirm("Do you want to add special characters?");
    if (special == true) {
      var specialArray = ["+", "-", "&", "!", "^", "~", "*", "?"];
    }
    else {
      var specialArray = [];
    }
    var passwordOptions = lowerCaseArray.concat(upperCaseArray, numericArray, specialArray);

    console.log(passwordOptions);

    var passwordCharacters = []
    for (let i = 0; i < length; i++) {
      const characterCode = passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
      console.log(characterCode);
      passwordCharacters.push(characterCode)
      console.log(passwordCharacters);
    }
    // console.log(passwordCharacters);
    // return passwordCharacters.join('')
   
    

  }

  // return passwordCharacters.join('')
  
}

// console.getElementById('includeSymbols')



// THEN I choose lowercase, uppercase, numeric, and/or special characters
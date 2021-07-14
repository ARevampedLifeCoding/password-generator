let generateBtn = document.querySelector("#generate");
const randomFunction = {
  lowerCase:getLowerCase,
  upperCase:getUpperCase,
  number:getNumber,
  specialCharacters:getSpecial,
}

function  getUpperCase (){
  return String.fromCharCode(Math.floor(Math.random()* 26)+65);
}
function getLowerCase (){
  return String.fromCharCode(Math.floor(Math.random()* 26)+97);
}
function  getNumber (){
  return String.fromCharCode(Math.floor(Math.random()* 10)+48);
}
function  getSpecial(){
  const symbols = "!@#$%^&*()_+=-<>.,/";
  return symbols[Math.floor(Math.random()*symbols.length)];
}
function generatePassword(){
  let passwordLength = prompt("How many characters would you like your password to be?");

if ( passwordLength < 8 || passwordLength > 128) {
  alert("Must be  between 8 and 128 characters");
}


    let lowerCase = window.confirm("Do you want to use lowercase?")
    let upperCase = window.confirm("Do you want to use uppercase?")
    let number = window.confirm("Do you want to use numbers?")
    let specialCharacters =window.confirm("Do you want to use special characters?")
return;
  
}

  

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// WHEN I click the button to generate a password---------->
// THEN I am presented with a series of prompts for password criteria--------->
// WHEN prompted for password criteria----------->
// THEN I select which criteria to include in the password--------->
// WHEN prompted for the length of the password----------->
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password---------->
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt--------->
// THEN my input should be validated and at least one character type should be selected-------->
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

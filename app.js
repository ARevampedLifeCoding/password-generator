let generateBtn = document.querySelector("#generate");

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

function promptPasswordLength() {
  while (true) {
    let passwordLength = prompt("How many characters would you like your password to be?");
    passwordLength = parseInt(passwordLength);
    if (!Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Must be between 8 and 128 characters");
    } else {
      return passwordLength;
    }
  }
}

function promptResponseToBool(response) {
  switch(response) {
    case 'yes':
    case 'y':
    case '1':
      return true;
    case 'no':
    case 'n':
    case '0':
      return false;
    default:
      return undefined;
  }
}

function promptPasswordPreference(queryText, errorText) {
  let ret;
  while(true) {
    ret = promptResponseToBool(prompt(queryText));
    if(ret !== undefined) {
      return ret;
    } else {
      alert(errorText);
    }
  }
}

function promptPasswordPreferences() {
  let userPreferenceErrorText = 'Invalid option: please use (y)es or (n)o';
  let useUppercase = promptPasswordPreference("Would you like to use uppercase?", userPreferenceErrorText); 
  let useLowerCase = promptPasswordPreference("Would you like to use lowercase?", userPreferenceErrorText);       
  let useNumbers= promptPasswordPreference("Would you like to  use numbers?", userPreferenceErrorText); 
  let useSpecialCharacters = promptPasswordPreference("Would  you like to use special characters?", userPreferenceErrorText); 

  return {
    useUppercase, 
    useLowerCase, 
    useNumbers,
    useSpecialCharacters
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random()*max);
}

function getCharacterGenerator(passwordCriteria) {
  let characterGeneratorArray = [];
  if(passwordCriteria.useUppercase === true) {
    characterGeneratorArray.push(getUpperCase);
  }
  if(passwordCriteria.useLowerCase === true) {
    characterGeneratorArray.push(getLowerCase);
  }
  if(passwordCriteria.useNumbers === true) {
    characterGeneratorArray.push(getNumber);
  }
  if(passwordCriteria.useSpecialCharacters === true) {
    characterGeneratorArray.push(getSpecial);
  }
  return characterGeneratorArray;
}

function generateRandomPasswordCharacter(characterGeneratorArray) {
  let randomInt= getRandomInt(characterGeneratorArray.length);
  return characterGeneratorArray[randomInt]();
}

function validateUserPasswordPreferences(passwordPreferences) {
   for(let key in passwordPreferences) {
    if(passwordPreferences[key] === true) {
      return true;
    }
  }
  return false;
}

function generateRandomPasswordString(length, passwordCriteria) {
  let characterGenerator = getCharacterGenerator(passwordCriteria); 
  let password = '';

  for(let i = 0; i < length; i++) {
    let character = generateRandomPasswordCharacter(characterGenerator);
    password = password.concat(character);
  }
  return password;
}

function generatePassword(){
  let passwordLength = promptPasswordLength();
  let passwordPreferences = promptPasswordPreferences();
  let preferencesValid = validateUserPasswordPreferences(passwordPreferences);
  if(!preferencesValid) {
    alert('Must select at least one type of character to use in your password!');
    return undefined;
  } else {
    return generateRandomPasswordString(passwordLength, passwordPreferences);
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  if(password !== undefined) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

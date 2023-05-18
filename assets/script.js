// Assignment Code
var generateBtn = document.querySelector("#generate");

//establish vars for lower case, upper case, numeral and special characters
var specialCharacters = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '/',
  '"',
  '?',
  ';',
  ':',
  ',',
  '<',
  '.',
  '>',
  '~',
];
var numeralCharacters = [

  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

var lowerCasedAlphas = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedAlphas = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );


  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  //setting password length between 8 and 128 characters
  if(length < 8){
    alert("password must be at least 8 characters long");
  }

  if(length > 128){
    alert("password must be 128 characters or less");
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  //var to store boolean of if lower case characters are to be used
  var hasLowerCaseCharacters = confirm(
    'Click OK to confirm including Lower-Case characters.'
  );
  //var to store boolean of if upper case characters are to be used
  var hasUpperCaseCharacters = confirm(
    'Click OK to confirm including Upper-Case characters.'
  );
  //var to store boolean if number characters are to be used
  var hasNumerals = confirm(
    'Click OK to confirm including Numbers.'
  );
  //debug output to check if hasSpecialCharacters, hasLowerCaseCharacters, hasUpperCharacters and hasNumerals works
  // console.log("special characters " + hasSpecialCharacters);
  // console.log("Lower-Case characters " + hasLowerCaseCharacters);
  // console.log("Upper-Case characters " + hasUpperCaseCharacters);
  // console.log("Numeral characters " + hasNumerals);
  // console.log(typeof hasSpecialCharacters);
  // console.log(typeof hasLowerCaseCharacters);
  // console.log(typeof hasUpperCaseCharacters);
  // console.log(typeof hasNumerals);
  
   // Object to store user input
   var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasNumerals: hasNumerals,
    // add more properties and values here
   }
  //  console.log(passwordOptions);
   return passwordOptions;
}



// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];
  // console.log(options.hasSpecialCharacters);
  // Check if an options object exists, if not exit the function
  if (!options) return null;

   // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
    // console.log(options.hasSpecialCharacters);
    // console.log(typeof options.hasSpecialCharacters);
    // console.log(possibleCharacters);
  }

  //conditional to see if lower case characters to be in password
  //push new lower case characters to guaranteedCharacters
  if (options.hasLowerCaseCharacters === true) {
    possibleCharacters = possibleCharacters.concat(lowerCasedAlphas);
    guaranteedCharacters.push(getRandom(lowerCasedAlphas));
    // console.log(possibleCharacters);
  }

  //conditional to see if upper case characters to be in password
  //push new upper case characters to guaranteedCharacters
  if (options.hasUpperCaseCharacters === true) {
    possibleCharacters = possibleCharacters.concat(upperCasedAlphas);
    guaranteedCharacters.push(getRandom(upperCasedAlphas));
    // console.log(possibleCharacters);
  }
  //conditional to see if numeral characters to be in password
  //push numeral characters to guaranteedCharacters
  if (options.hasNumerals === true) {
    possibleCharacters = possibleCharacters.concat(numeralCharacters);
    guaranteedCharacters.push(getRandom(numeralCharacters));
    // console.log(possibleCharacters);
  }

//for loop to generate character from possible characters list
  for(var i = 0; i < options.length; i++) {
    var Character= getRandom(possibleCharacters);
    result.push(Character);
    // console.log(result);
  }
  //adds one of the characters for the guaranteed type
  for(var i = 0; i < guaranteedCharacters.length; i++){
    result[i] = guaranteedCharacters[i];
    // console.log(guaranteedCharacters);
  }
  // console.log(result);
    // Transform the result into a string and pass into writePassword
    return result.join(''); 
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

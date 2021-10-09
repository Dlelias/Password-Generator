// pseudo code 
// step 1 set prompts for password criteria 
// -password criteria length 8-128 characters, upper, lower case character , and special characters 
// step 2 input validation
// step 3 create password based on criteria and display password 


// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

//defining varibles 
var lowerCaseChr="abcdefghijklmnopqrstuvwxyz";

var upperCaseChr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var specialChr ="#$%&()*+<=>?@";

var numbers = "0123456789";

let characterset = "";

// Prompt questions and answers. Make sure console log message appears and is connect correctely 
function generatePassword() {
  console.log("button was clicked!")
  var passwordLength = prompt(
    "Between 8 and 128 characters, how long would you like your password to be?"
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    alert("Please enter a number between 8 and 128.");
  } else {
    var lowerCase = confirm("Would you like to use lowerCase characters?");
    if(lowerCase){
      characterset += lowerCaseChr 
    };
    var upperCase = confirm("Would you like to use upperCase characters?");
    if (upperCase){
      characterset += upperCaseChr
    };
    var specialCharacters = confirm("Would you like to use specialCharacters?");
    if (specialChr){
      characterset += specialChr
    };
    var numbers = confirm("Would you like to use numbers?");
    if (numbers){
      characterset += numbers
    };
    //if none of the options above are  selected alert user / input validation
    if (
      lowerCase === false &&
      upperCase === false &&
      specialCharacters === false &&
      numbers === false
    ) {
      alert("Please select at least one character type.");
      generatePassword();
    }
  }
// for loop for random characters creating a password with password criteria 
  var password= "";
  for (let i=0; i<passwordLength; i++){
    password += characterset.charAt(Math.floor(Math.random() * characterset.length))
  }
  return password
}


function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)

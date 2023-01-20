// Assignment Code

// User Story
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria - done
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password - done
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters - done
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters - done
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected - done
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria - done
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page - done


//pseudo code:
// when I click on button I am asked a series of questions that will restrict the params when generating pasword. 

//   ESTABLISHING METHOD TO PASSWORD GENERATOR FUNCTION
//How long do you want your password to be?  input a numberic value between 8-128
//if  numeric value input is between 8-128 >
//Log value const passWordLen: ""  proceed to next prompt/
//if passWordLen.length > 8 and < 128? use || truthy
//if other, i.e. alpha value or 8> or >128;
//return 
//Do you want upperscase letter?
//'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '"K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//if yes
//log value const upperLetter = " 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '"K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',"
//if no, omit.
//Do you want lowercase?
//'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//if yes
//Add to string in password generate fxn;  value const lowerLetter = "'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'"
//if no, omit.
//Do you want number values?
// '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
//if yes
//Add to string in password generate fxn;  value const numValue = "'1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "
//if no, omit.
// Do you want special characters?
//"!",	"@",	"#",	"$",	"%",	"^", "&",	"*",	"(", ")", "_", "-",	"+", "=",	"[",	"{"	"]"	"}"	";"	":"	"'"	","	"<"	"."	">"	"/"	"?"	"`"	"~"
//if yes
//Add to string in password generate fxn;  const specialChar = "!"	"@"	"#"	"$"	"%"	"^"	"&"	"*"	"("	")"	"_"	"-"	"+"	"="	"["	"{"	"]"	"}"	";"	":"	"'"	","	"<"	"."	">"	"/"	"?"	"`"	"~"
//if no, omit.
//at the very end, at the very end of your function in js document.getElementById ("password").innertext=password; in HTML under start button line, <div id="password"></div
// use const arrays, objects and fxn,
// Write password to the #password input
//class "BTN", button id  "generate"; initial Generate password button.

const passwordLength = [
  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
  47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
  66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102,
  103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
  118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
]; // or [8-128]

const upperLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numericValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "[",
  "{",
  "]",
  "}",
  ";",
  ":",
  "'",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
  "`",
  "~",
];

function generatePassword() {

  var passwordParameters = [];
  var passwordGenerated = [];
  
  var isNum=figureOutLength()

  function figureOutLength(){
  let passwordLength = prompt(
  "How long do you want your password to be? Provide a numeric value between 8 - 128"
  );
      var isNum = parseInt(passwordLength)
      if (!isNum || isNum<8 || isNum >128 ){
      alert("Provide a numeric value between 8 - 128");
      return figureOutLength()
    }
  return isNum
}
console.log (isNum);

const needsUpper = confirm ("Do you want your password to contain UPPERCASE letters?");
  if (needsUpper) {
    passwordParameters= passwordParameters.concat(upperLetter); 
  }

const needsLower = confirm ("Do you want your password to contain lowercase letters?");
  if (needsLower) {
    passwordParameters= passwordParameters.concat(lowerLetter)
  }

const needsNum = confirm ("Do you want your password to contain # values (1 2 3 4 5 6 7 8 9 0)?");
  if (needsNum) {
    passwordParameters= passwordParameters.concat(numericValue)
  }

const needsSpecial = confirm ("Do you want your password to contain $pec!al characters?");
  if (needsSpecial) {
    passwordParameters= passwordParameters.concat(specialChar)
  }

// if user did not select at least one type of variable, they would be prompted with alert
if(!needsLower&&!needsNum&&!needsUpper&&!needsSpecial){
    alert("YOU MUST CHOOSE AT LEAST 1 OPTION!");
}
//console.log(passwordParameters);


for (let index = 0; index < isNum; index++)
passwordGenerated.push(passwordParameters[Math.floor(Math.random()*passwordParameters.length)])

console.log(passwordGenerated)
// used join ("") function to remove the ","
  return passwordGenerated.join("")
}

function writePassword() {
  console.log("START")
  var password = generatePassword();
  /////////////////////////
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  document.getElementById ("password").innertext=password
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

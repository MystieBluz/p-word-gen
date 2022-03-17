// Assignment Code
var generateBtn = document.querySelector("#generate")

var pwLength = 12;
var randomPw = [];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pwNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pwSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "}", "{", "?"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var rightQuestions = pwQuestions(); 
    if(rightQuestions) {
        var pw1 = generatePassword();
        var passwordText = document.querySelector("#password");
  
     passwordText.value = pw1;

    }
  }
  
function generatePassword() {
    var password = "";
    for (var i =  0; i < pwLength; i++) {
        var randomText = Math.floor(Math.random() * randomPw.length);
        password = password + randomPw[randomText];  
    }
    return password;
    
}

function pwQuestions(){
    randomPw = [];

    pwLength = parseInt(prompt("Please enter desired character length between 8 to 128"));

    if (pwLength < 8 || pwLength > 128) {
        alert("REMINDER: Must choose between 8 to 128 characters!");
        return false;
        prompt("Please enter desired character length between 8 to 128")
    }

    if (confirm("Would you like to include Upper Case letters?")) {
        randomPw = randomPw.concat(upperCase);
    }

    if (confirm("Would you like to include Lower Case letters?")) {
        randomPw = randomPw.concat(lowerCase);
    }

    if (confirm("Would you like to include Numbers?")) {
        randomPw = randomPw.concat(pwNumbers);
    }

    if (confirm("Would you like to include Symbols?")) {
        randomPw = randomPw.concat(pwSymbols);
    }
    return true;

}
   














  
   
